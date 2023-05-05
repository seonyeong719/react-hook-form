import axios from "axios";
import TokenService from "repository/TokenService";
import UserApi from "./userApi";

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

Axios.interceptors.request.use(
  (config) => {
    const access_token = TokenService.getToken();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  // accessToken 재발급 필요
  async (error) => {
    if (error.response.status === 417) {
      await UserApi.logout();
    }

    const originalRequest = error.config;
    // 에러코드가 403인 경우 세션 만료가 됨. =>  refreshToken을 통해 accessToken 재발급
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await UserApi.refreshToken();
      if (res.status === 200) {
        const token = res.data.data;
        TokenService.setToken(token);
        Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return Axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);
