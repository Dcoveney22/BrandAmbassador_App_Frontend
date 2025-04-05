import HomePageButton from "../Button_Components/HomePageButton";
import { ViewMode } from "../Main_Components/ParentComponent";
type HeaderProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};
function Header({ setViewMode }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <HomePageButton setViewMode={setViewMode} />
      </div>
    </header>
  );
}
export default Header;
