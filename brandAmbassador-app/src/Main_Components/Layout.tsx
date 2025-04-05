import { PropsWithChildren, SetStateAction } from "react";
import Header from "./Header";
import { ViewMode } from "./ParentComponent";
import HeaderCopy from "./Header_copy";

type PropsWithChildren = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  children: React.ReactNode;
};

const Layout = ({ children, setViewMode }: PropsWithChildren) => {
  return (
    <div className="layoutContainer">
      <Header setViewMode={setViewMode} />
      <div className="bigSpace"></div>
      {children}
    </div>
  );
};
export default Layout;
