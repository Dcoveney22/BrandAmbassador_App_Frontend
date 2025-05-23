import { ViewMode } from "../Main_Components/ParentComponent";
import CompareIcon from "../icons/CompareIcon";
import { ResetIcon } from "../icons/ResetIcon";

type CompareButtonProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};
function CompareButton({ setViewMode, result }: CompareButtonProps) {
  const onButtonClick = () => {
    setViewMode(ViewMode.PriceTreeCompleted result={result});
  };

  return <CompareIcon="backButton" onClick={onButtonClick} />;
}
export default CompareButton;
