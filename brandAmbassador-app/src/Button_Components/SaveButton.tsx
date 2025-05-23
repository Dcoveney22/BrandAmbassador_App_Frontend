import { ViewMode } from "../Main_Components/ParentComponent";
import { SaveIcon } from "../icons/SaveIcon";
import { PricingTreeSKU } from "../Functions/functionTypes";
import sendSaveData from "../Functions/testSaveFunction";

type SaveButtonProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  result: PricingTreeSKU;
  issue: String;
};

function SaveButton({ result, setViewMode }: SaveButtonProps) {
  const onButtonClick = async () => {
    const response = await sendSaveData(result);
    const error = await response.json();
    // return value from testSaveFunction - handle if error - async/await
    error.issues.forEach((issue) => {
      alert(issue.message);
    });

    if (response.status === 400) {
      // alert("STOP!");
    }
    if (response.status === 201) {
      setViewMode(ViewMode.SubmittedDisplay);
    }
    // console.log(result);}
  };

  return <SaveIcon id="saveButton" onClick={onButtonClick} />;
}

export default SaveButton;
