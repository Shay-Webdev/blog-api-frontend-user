//import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import {
  /*isTokenExpired,*/ refreshAccessToken,
} from "../../utilities/fetchApi";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function fetchhandler() {
      try {
        const refToken = import.meta.env.VITE_REFRESH_TOKEN as string;
        const refreshTokenRes = await refreshAccessToken(refToken);
        console.log(
          "refresh Token Response in app: ",
          refreshTokenRes,
          "env variable: ",
          refToken,
        );
      } catch (error) {
        console.log("error refreshing toke in App: ", error);
      }
    }
    fetchhandler();
  }, []);
  return (
    <div className={styles.app_container}>
      <Header></Header>
      <div className={styles.main_container}>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
