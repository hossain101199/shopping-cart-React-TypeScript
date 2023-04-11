import { ReactNode } from "react";
import CartIcon from "../assets/svgs/cartIcon";
import { NavLink } from "react-router-dom";
import NavigationBar from "./NavigationBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
