import { Link } from "react-router-dom";
import styles from "./Error.module.css";
const ErrorPage = () => {
  return (
    <section className={styles.container}>
      <h1>Oh! you are lost, Bad URL</h1>
      <Link to="/"> Go back to home</Link>
    </section>
  );
};

export { ErrorPage };
