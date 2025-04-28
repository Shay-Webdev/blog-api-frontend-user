//import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
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
