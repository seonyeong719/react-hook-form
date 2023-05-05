const ACCESS_TOKEN = "access_token";

const TokenService = {
  setToken(token) {
    localStorage.setItem(ACCESS_TOKEN, token);
  },
  getToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  removeToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  },
};
export default TokenService;
