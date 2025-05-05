//import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { userInSession } from "../../utilities/userInSession";
import { useEffect, useState } from "react";
import { NoLogin } from "../NoLoginPage/NoLogin";
import { IJwtPayload } from "../../types/types";

function App() {
  const [sessionUser, setSessionUser] = useState<
    string | IJwtPayload | null | undefined
  >(null);
  useEffect(() => {
    const asyncHanlder = async () => {
      const user = await userInSession();
      setSessionUser(user);
    };
    asyncHanlder();
  }, []);
  return (
    <div className={styles.app_container}>
      <Header></Header>
      <section className={styles.main_container}>
        {sessionUser ? <Outlet /> : <NoLogin />}
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
