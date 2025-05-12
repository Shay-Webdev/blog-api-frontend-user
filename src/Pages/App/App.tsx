//import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
//import { userInSession } from "../../utilities/userInSession";
//import { useEffect, useState } from "react";
//import { IJwtPayload } from "../../types/types";

function App() {
  //  const [sessionUser, setSessionUser] = useState<
  //    string | IJwtPayload | null | undefined
  //  >(null);
  //  const navigate = useNavigate();
  //  useEffect(() => {
  //    const asyncHanlder = async () => {
  //      const user = await userInSession();
  //      setSessionUser(user);
  //      if (!sessionUser) {
  //        navigate("nologin");
  //      }
  //    };
  //    asyncHanlder();
  //  }, [navigate, sessionUser ]);
  return (
    <div className={styles.app_container}>
      <Header></Header>
      <main className={styles.main_container}>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
