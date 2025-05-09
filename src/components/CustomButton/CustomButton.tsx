import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styles from "./CustomButton.module.css";

type CustomBtnProps = {
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
} & ButtonHTMLAttributes<HTMLButtonElement>;
const CustomButton = (props: CustomBtnProps) => {
  const { onClickHandler, className, children } = props;
  return (
    <button className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
};
const MyButton = (props: CustomBtnProps) => {
  const { onClickHandler, children } = props;
  return (
    <CustomButton
      onClickHandler={onClickHandler}
      children={children}
      className={styles.custom_button}
    ></CustomButton>
  );
};
export { CustomButton, MyButton };
