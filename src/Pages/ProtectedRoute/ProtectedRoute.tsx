import { useEffect, useState } from "react";
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { Navigate, Outlet } from "react-router-dom";
import { userInSession } from "../../utilities/userInSession";

const ProtectedRoute = () => {
  const [status, setStatus] = useState<"loading" | "auth" | "noAuth">(
    "loading",
  );
  const [sessionUser, setSessionUser] = useState<
    Record<string, unknown> | null | undefined
  >(undefined);

  useEffect(() => {
    const asyncHanlder = async () => {
      const user = await userInSession();
      setStatus(user ? "auth" : "noAuth");
      setSessionUser(user);
    };
    asyncHanlder();
  }, []);

  if (status === "loading") {
    return <LoadingPage />;
  }
  if (status === "noAuth") {
    return <Navigate to="/nologin" replace />;
  }
  return <Outlet context={sessionUser} />;
};

export { ProtectedRoute };
