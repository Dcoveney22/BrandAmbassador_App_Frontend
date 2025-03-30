import HomePageButton from "./HomePageButton";
import { ViewMode } from "./ParentComponent";
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
