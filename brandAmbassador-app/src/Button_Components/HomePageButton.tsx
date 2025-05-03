import { HomeIcon } from "../icons/HomeIcon";
import { ViewMode } from "../Main_Components/ParentComponent";

type HomePageButtonProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};
function HomePageButton({ setViewMode }: HomePageButtonProps) {
  const onButtonClick = () => {
    setViewMode(ViewMode.HomePage);
  };

  return <HomeIcon id="homeButton" onClick={onButtonClick} />;
}
export default HomePageButton;
