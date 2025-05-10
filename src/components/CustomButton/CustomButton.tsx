import { ButtonHTMLAttributes } from "react";
import styles from "./CustomButton.module.css";

type CustomBtnProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;
const CustomButton = (props: CustomBtnProps) => {
  const { className, children, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
const MyButton = (props: CustomBtnProps) => {
  const { children, ...rest } = props;
  return (
    <CustomButton
      children={children}
      className={styles.custom_button}
      {...rest}
    ></CustomButton>
  );
};
export { CustomButton, MyButton };
