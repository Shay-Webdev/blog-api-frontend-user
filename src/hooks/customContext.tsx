import React, { ReactNode, useContext } from "react";

type CustomContextProviderProps<T> = {
  children: ReactNode;
  context: React.Context<T>;
  value: T;
};

const CustomContextProvider = <T,>(props: CustomContextProviderProps<T>) => {
  const { value, context, children } = props;
  return <context.Provider value={value}>{children}</context.Provider>;
};

const useCustomContext = <T,>(context: React.Context<T>) => {
  const value = useContext(context);
  if (value === undefined) {
    throw new Error(
      `useContext must be used with a Context Provider and a value`,
    );
  }
  return value;
};
export { CustomContextProvider, useCustomContext };
