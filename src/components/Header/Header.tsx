import styles from "./Header.module.css";
import { MyNavLink } from "../../Pages/MyLink/MyLink";
function Header() {
  return (
    <header className={styles.header}>
      <h1>Blog it!</h1>
      <MyNavLink To="/">Home</MyNavLink>
    </header>
  );
}

export { Header };
