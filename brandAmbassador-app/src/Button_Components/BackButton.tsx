import { ViewMode } from "../Main_Components/ParentComponent";
import { ResetIcon } from "../icons/ResetIcon";

type BackButtonProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};
function BackButton({ setViewMode }: BackButtonProps) {
  const onButtonClick = () => {
    setViewMode(ViewMode.PriceTree);
  };

  return <ResetIcon id="backButton" onClick={onButtonClick} />;
}
export default BackButton;
