import { ViewMode } from "../Main_Components/ParentComponent";
import PricingTreeCard from "./PricingTreeCard";
import { PricingTreeSKU } from "../Functions/functionTypes";
import BackButton from "../Button_Components/BackButton";
import SaveButton from "../Button_Components/SaveButton";

export type priceSKU = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  RRP: number;
};
type ResultsDisplayProps = {
  result: PricingTreeSKU;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

function ResultsDisplay({ result, setViewMode }: ResultsDisplayProps) {
  //   console.log(data)

  return (
    <div className="homeDiv">
      <div>
        <PricingTreeCard
          Brand={result.Brand}
          SKU={result.SKU}
          CL={result.CL}
          ABV={result.ABV}
          Import_Origin={result.Import_Origin}
          Ex_Works={result.Ex_Works}
          RRP={result.RRP}
          Duty={result.Duty}
        />
      </div>
      <div id="resultsButtonContainer">
        <BackButton setViewMode={setViewMode} />
        <SaveButton setViewMode={setViewMode} result={result} />
      </div>
    </div>
  );
}
export default ResultsDisplay;
