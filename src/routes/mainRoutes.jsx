import MainLayout from "../Layouts/MainLayout";
import DetailPage from "../Page/DetailPage/DetailPage";
import HomePage from "../Page/HomePage/HomePage";
import LoginPage from "../Page/LoginPage/LoginPage";
import NotFoundPage from "../Page/NotFoundPage/NotFoundPage";
import RegisterPage from "../Page/RegisterPage/RegisterPage";

export const mainRoutes = [
  {
    url: "/",
    component: <MainLayout Component={HomePage} />,
  },
  {
    url: "*",
    component: <MainLayout Component={NotFoundPage} />,
  },
  {
    url: "/login",
    component: <MainLayout Component={LoginPage} />,
  },
  {
    url: "/register",
    component: <MainLayout Component={RegisterPage} />,
  },
  {
    url: "/detail/:id",
    component: <MainLayout Component={DetailPage} />,
  },
];
