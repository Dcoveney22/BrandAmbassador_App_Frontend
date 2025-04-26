import { HomeIcon } from "../icons/HomeIcon";
import { ViewMode } from "../Main_Components/ParentComponent";
import { ResetIcon } from "../icons/ResetIcon";
import { SaveIcon } from "../icons/SaveIcon";
import { PricingTreeSKU } from "../Functions/functionTypes";
import sendSaveData from "../Functions/testSaveFunction";

type SaveButtonProps = {
  //   setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  result: PricingTreeSKU;
};
function SaveButton({ result }: SaveButtonProps) {
  const onButtonClick = () => {
    sendSaveData(result);
    // console.log(result);
  };

  return <SaveIcon id="saveButton" onClick={onButtonClick} />;
}
export default SaveButton;
