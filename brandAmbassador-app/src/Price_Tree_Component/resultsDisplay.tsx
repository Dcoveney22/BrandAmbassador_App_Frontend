import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ViewMode } from "../Marketing_Product_Components/ParentComponent";
import Header from "../Marketing_Product_Components/Header";
import Loader from "../Marketing_Product_Components/loader";
import PricingTreeCard from "./PricingTreeCard";
import PricingFormTan from "./PricingFormTan";
import formValueProcessing from "../Functions/formValueProcessing";
import { PricingTreeSKU } from "../Functions/functionTypes";
import Button from "../Marketing_Product_Components/Button";
import ResetButton from "./ResetButton";
import BackButton from "./ResetButton";
import SaveButton from "./SaveButton";

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
