import { RouteObject } from "react-router-dom";
import App from "../Pages/App/App.tsx";
import { NoLogin } from "../Pages/NoLoginPage/NoLogin.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "nologin",
        element: <NoLogin />,
      },
    ],
  },
];

export default routes;
