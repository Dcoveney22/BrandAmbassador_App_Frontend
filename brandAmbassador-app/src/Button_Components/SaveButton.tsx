import { HomeIcon } from "../icons/HomeIcon";
import { ViewMode } from "../Main_Components/ParentComponent";
import { ResetIcon } from "../icons/ResetIcon";
import { SaveIcon } from "../icons/SaveIcon";
import { PricingTreeSKU } from "../Functions/functionTypes";
import sendSaveData from "../Functions/testSaveFunction";
import submittedCard from "../Price_Tree_Component/submittedCard";

type SaveButtonProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  result: PricingTreeSKU;
};
function SaveButton({ result, setViewMode }: SaveButtonProps) {
  const onButtonClick = () => {
    sendSaveData(result);
    if (result) {
      setViewMode(ViewMode.SubmittedDisplay);
    }
    // console.log(result);}
  };

  return <SaveIcon id="saveButton" onClick={onButtonClick} />;
}
export default SaveButton;
