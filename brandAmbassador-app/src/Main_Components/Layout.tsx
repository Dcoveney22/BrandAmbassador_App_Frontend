import { PropsWithChildren, SetStateAction } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layoutContainer">
      <Header />
      {children}
    </div>
  );
};
export default Layout;
