import styles from "./NoLogin.module.css";
import { Link } from "react-router-dom";
const NoLogin = () => {
  return (
    <div className={styles.noLoginContainer}>
      <h1>Logged Out !</h1>
      <p>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign up</Link> to
        continue
      </p>
    </div>
  );
};

export { NoLogin };
