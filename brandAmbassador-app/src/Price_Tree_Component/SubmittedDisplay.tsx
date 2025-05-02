import { ViewMode } from "../Main_Components/ParentComponent";
import Header from "../Main_Components/Header";
import PricingTreeCard from "./PricingTreeCard";
import { PricingTreeSKU } from "../Functions/functionTypes";
import BackButton from "../Button_Components/BackButton";
import SaveButton from "../Button_Components/SaveButton";
import sendSaveData from "../Functions/testSaveFunction";
import submittedCard from "./submittedCard";
import SubmittedCard from "./submittedCard";

export type priceSKU = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  RRP: number;
};
type SubmittedDisplayProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

function SubmittedDisplay({ setViewMode }: SubmittedDisplayProps) {
  //   console.log(data)

  return (
    <div className="homeDiv">
      <div>
        <SubmittedCard />
      </div>
      <div id="resultsButtonContainer">
        <BackButton setViewMode={setViewMode} />
      </div>
    </div>
  );
}
export default SubmittedDisplay;
