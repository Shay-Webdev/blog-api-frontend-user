import { MyButton } from "../../components/CustomButton/CustomButton";
import { CustomForm } from "../../components/CustomForm/MyForm";
import { MyInput } from "../../components/CustomInput/CustomInput";
import styles from "./Login.module.css";
import { urlPaths } from "../../utilities/urlPaths.ts";
import { useNavigate } from "react-router-dom";
import { string, z } from "zod";
import { ChangeEventHandler, useActionState, useState } from "react";

const loginSchema = z.object({
  email: string().email(),
  password: string().min(8),
});

const formAcion = (prevState: unknown, formData: FormData) => {
  const formValues = Object.fromEntries(formData);
  const result = loginSchema.safeParse(formValues);
  if (result.error) {
    console.log(`error in login: `, result.error.message);
  }
  if (result.success) {
    console.log(`zod parse in login: `, result);
  }
  return result;
};

const Login = () => {
  //  const navigate = useNavigate();
  //  const loginUrl = urlPaths.sessionUrl.login;
  const [state, action, isPending] = useActionState(formAcion, undefined);
  const [inputValue, setInputValue] = useState<string | undefined>("");

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <>
      <CustomForm legend="Login" action={action} method="POST">
        <MyInput
          type="email"
          id="login_email"
          label="Email"
          name="email"
          onChange={onChangeHandler}
          defaultValue={state?.data?.email}
          value={inputValue}
        />
        <MyInput
          type="password"
          id="login_password"
          label="Password"
          name="password"
          onChange={onChangeHandler}
          defaultValue={state?.data?.password}
          value={inputValue}
        />
        <div className={styles.button_container}>
          <MyButton type="submit" disabled={isPending}>
            Login
          </MyButton>
        </div>
        {state?.error && (
          <span style={{ color: "red" }} className={styles.error_span}>
            {state?.error.errors.map((error) => {
              return <p>* {error.message}</p>;
            })}
          </span>
        )}

        {state?.success && (
          <span
            style={{ color: "green" }}
            className={styles.errorSpan}
          >{`Submitted succesfully`}</span>
        )}
      </CustomForm>
    </>
  );
};

export { Login };
