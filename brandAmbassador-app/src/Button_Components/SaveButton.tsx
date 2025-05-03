import { ViewMode } from "../Main_Components/ParentComponent";
import { SaveIcon } from "../icons/SaveIcon";
import { PricingTreeSKU } from "../Functions/functionTypes";
import sendSaveData from "../Functions/testSaveFunction";

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
