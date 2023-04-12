import { ReactNode } from "react";
import NavigationBar from "./NavigationBar";
import ShoppingCart from "../components/molecules/ShoppingCart";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <NavigationBar />
      {children}
      <ShoppingCart />
    </>
  );
};

export default Layout;
