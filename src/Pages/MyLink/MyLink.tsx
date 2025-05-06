import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/variables.css";

type myLinkProps = {
  children: React.ReactNode;
  activeColor: string;
  inactiveColor: string;
  To: string;
};
const CustomNavLink = (props: myLinkProps) => {
  const { activeColor, inactiveColor, children, To } = props;
  return (
    <NavLink
      to={To}
      style={({ isActive }) => ({
        color: isActive ? activeColor : inactiveColor,
      })}
    >
      {children}
    </NavLink>
  );
};

const MyNavLink = (props: Pick<myLinkProps, "To" | "children">) => {
  const { children, To } = props;
  return (
    <CustomNavLink
      To={To}
      activeColor="var(--glowing-red)"
      inactiveColor="var(--cool-gray)"
    >
      {children}
    </CustomNavLink>
  );
};

export { MyNavLink, CustomNavLink };
