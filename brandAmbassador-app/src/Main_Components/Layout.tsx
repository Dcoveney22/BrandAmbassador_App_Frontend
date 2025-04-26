import { PropsWithChildren, SetStateAction } from "react";
import Header from "./Header";
import { ViewMode } from "./ParentComponent";
import HeaderCopy from "./Header_copy";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="layoutContainer">
      <Header />
      <div className="bigSpace"></div>
      {children}
    </div>
  );
};
export default Layout;
