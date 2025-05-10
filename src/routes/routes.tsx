import { RouteObject } from "react-router-dom";
import App from "../Pages/App/App.tsx";
import { LoginOrSignup, NoLogin } from "../Pages/NoLoginPage/NoLogin.tsx";
import { Login, LoginWrapper } from "../Pages/Login/Login.tsx";
import { SignUp } from "../Pages/SignUp/SignUp.tsx";
import { ErrorFallback, ErrorPage } from "../Pages/Error/Error.tsx";
import { ErrorBoundary } from "react-error-boundary";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "nologin",
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
            element: <SignUp />,
          },
        ],
      },
    ],
  },
];

export default routes;
