import { ReactNode } from "react";
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
