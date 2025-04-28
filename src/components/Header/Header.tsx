import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <h1>Blog it!</h1>
      <Link to={"/"}>Home</Link>
    </header>
  );
}

export { Header };
