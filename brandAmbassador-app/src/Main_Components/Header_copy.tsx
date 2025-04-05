import HomePageButton from "../Button_Components/HomePageButton";
import { ViewMode } from "../Main_Components/ParentComponent";
type HeaderProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};
function HeaderCopy({ setViewMode }: HeaderProps) {
  return (
    <header className="header">
      <HomePageButton setViewMode={setViewMode} />
    </header>
  );
}
export default HeaderCopy;
