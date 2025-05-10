import { RouteObject } from "react-router-dom";
import App from "../Pages/App/App.tsx";
import { LoginOrSignup, NoLogin } from "../Pages/NoLoginPage/NoLogin.tsx";
import { LoginWrapper } from "../Pages/Login/Login.tsx";
import { SignUp } from "../Pages/SignUp/SignUp.tsx";
import { ErrorPage } from "../Pages/Error/Error.tsx";
import { LoadingPage } from "../Pages/LoadingPage/LoadingPage.tsx";
import { ProtectedRoute } from "../Pages/ProtectedRoute/ProtectedRoute.tsx";

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
            element: (
              <div>
                <h1>This is test page</h1>
              </div>
            ),
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
            element: <SignUp />,
          },
        ],
      },
    ],
  },
  {
    path: "loading",
    element: <LoadingPage />,
  },
];

export default routes;
