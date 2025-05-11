import { RouteObject } from "react-router-dom";
import App from "../Pages/App/App.tsx";
import { LoginOrSignup, NoLogin } from "../Pages/NoLoginPage/NoLogin.tsx";
import { LoginWrapper } from "../Pages/Login/Login.tsx";
import { SignupWrapper } from "../Pages/SignUp/SignUp.tsx";
import { ErrorPage } from "../Pages/Error/Error.tsx";
import { ProtectedRoute } from "../Pages/ProtectedRoute/ProtectedRoute.tsx";
import { Logout } from "../Pages/Logout/Logout.tsx";
import { PostsWrapper } from "../Pages/Posts/Posts.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <PostsWrapper />,
          },
        ],
      },
      {
        path: "/nologin",
        element: <NoLogin />,
        children: [
          {
            index: true,
            element: <LoginOrSignup />,
          },
          {
            path: "login",
            element: <LoginWrapper />,
          },
          {
            path: "signup",
            element: <SignupWrapper />,
          },
        ],
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
];

export default routes;
