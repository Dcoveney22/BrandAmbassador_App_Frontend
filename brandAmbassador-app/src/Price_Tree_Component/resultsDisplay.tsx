import { ViewMode } from "../Main_Components/ParentComponent";
import Header from "../Main_Components/Header";
import PricingTreeCard from "./PricingTreeCard";
import { PricingTreeSKU } from "../Functions/functionTypes";
import BackButton from "../Button_Components/ResetButton";
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

const testSendData: PricingTreeSKU = {
  Brand: "testBrand",
  SKU: "testSKU",
  CL: 70,
  ABV: 45,
  RRP: 22.56,
  Duty: 4,
  Import_Origin: "testImport",
  Ex_Works: 12.0,
};

function ResultsDisplay({ result, setViewMode }: ResultsDisplayProps) {
  //   console.log(data)

  return (
    <div>
      <Header setViewMode={setViewMode} />
      <div>
        <PricingTreeCard
          Brand={result.Brand}
          SKU={result.SKU}
          CL={result.CL}
          ABV={result.ABV}
          RRP={result.RRP}
          Duty={result.Duty}
          Import_Origin={result.Import_Origin}
          Ex_Works={result.Ex_Works}
        />
      </div>
      <div id="resultsButtonContainer">
        <BackButton setViewMode={setViewMode} />
        <SaveButton result={result} />
      </div>
    </div>
  );
}
export default ResultsDisplay;
