import styles from "./Login.module.css";
const Login = () => {
  return (
    <>
      <form action="" className={styles.login_form}>
        <label htmlFor="login_email">Email: </label>
        <input type="email" id="login_email" />
        <label htmlFor="login_email">Email: </label>
        <input type="email" id="login_email" />
      </form>
    </>
  );
};

export { Login };
