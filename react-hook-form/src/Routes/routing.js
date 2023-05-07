import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/Home/Login/login";
import SignUpPage from "../Pages/Home/SignUp/signUp";
import LandingPage from "../Pages/Landing/landingPage";
import Prt from "../Pages/Home";
import Header from "../Components/Layout/header";

// 기능 구현 로직 편하게 보려고 그냥 설정 해둠
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "form/login",
        element: <LoginPage />,
      },
      {
        path: "form/signup",
        element: <SignUpPage />,
      },
      {
        path: "form/prt",
        element: <Prt />,
      },
    ],
  },
]);
