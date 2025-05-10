import { MyButton } from "../../components/CustomButton/CustomButton";
import { CustomForm } from "../../components/CustomForm/MyForm";
import { MyInput } from "../../components/CustomInput/CustomInput";
import styles from "./Login.module.css";
import { urlPaths } from "../../utilities/urlPaths.ts";
import { useNavigate } from "react-router-dom";
import { string, z } from "zod";
import { ChangeEventHandler, useActionState, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryWrapper } from "../Error/Error.tsx";

const loginSchema = z.object({
  email: string().email(),
  password: string().min(8),
});

type loginCredentials = z.infer<typeof loginSchema>;

const Login = () => {
  //  const navigate = useNavigate();
  //  const loginUrl = urlPaths.sessionUrl.login;
  const { showBoundary } = useErrorBoundary();

  const formAcion = (prevState: unknown, formData: FormData) => {
    const formValues = Object.fromEntries(formData);
    const result = loginSchema.safeParse(formValues);
    if (result.error) {
      console.log(`error in login: `, result.error.message);
      showBoundary(result.error);
    }
    if (result.success) {
      console.log(`zod parse in login: `, result);
    }
    return result;
  };

  const [state, action, isPending] = useActionState(formAcion, undefined);
  const [inputValue, setInputValue] = useState<
    Partial<loginCredentials> | undefined
  >(undefined);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name]: e.currentTarget.value,
    });
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
          value={inputValue?.email}
        />
        <MyInput
          type="password"
          id="login_password"
          label="Password"
          name="password"
          onChange={onChangeHandler}
          defaultValue={state?.data?.password}
          value={inputValue?.password}
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

const LoginWrapper = () => {
  return (
    <ErrorBoundaryWrapper>
      <Login></Login>
    </ErrorBoundaryWrapper>
  );
};
export { Login, LoginWrapper };
