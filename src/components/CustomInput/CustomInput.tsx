import {
  ChangeEventHandler,
  HTMLAttributes,
  HTMLInputTypeAttribute,
} from "react";
import styles from "./CustomInput.module.css";

type CustomInputProps = {
  type: HTMLInputTypeAttribute;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & HTMLAttributes<HTMLInputElement>;
const CustomInput = (props: CustomInputProps) => {
  const { type, value, onChange, className } = props;
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      value={value}
    />
  );
};

type MyInputProps = {
  label: string;
} & CustomInputProps;
const MyInput = (props: MyInputProps) => {
  const { type, onChange, value, label, id } = props;
  return (
    <div className={styles.myinput_container}>
      <label htmlFor={id}>{label}</label>
      <CustomInput
        className={styles.custom_input}
        onChange={onChange}
        value={value}
        type={type}
        id={id}
      />
    </div>
  );
};

export { CustomInput, MyInput };
