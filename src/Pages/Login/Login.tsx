import { MyButton } from "../../components/CustomButton/CustomButton";
import { CustomForm } from "../../components/CustomForm/MyForm";
import { MyInput } from "../../components/CustomInput/CustomInput";
import styles from "./Login.module.css";
const Login = () => {
  const onClickHandler = () => {};
  return (
    <>
      <CustomForm legend="Login" action="/">
        <MyInput type="email" id="login_email" label="Email" />
        <MyInput type="password" id="login_password" label="Password" />
        <div className={styles.button_container}>
          <MyButton onClickHandler={onClickHandler}>Login</MyButton>
        </div>
      </CustomForm>
    </>
  );
};

export { Login };
