import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ViewMode } from "../Marketing_Product_Components/ParentComponent";
import Header from "../Marketing_Product_Components/Header";
import Loader from "../Marketing_Product_Components/loader";
import PricingTreeCard from "./PricingCard";
import PricingFormTan from "./PricingFormTan";
import formValueProcessing from "../Functions/formValueProcessing";
import { PricingTreeSKU } from "../Functions/functionTypes";

export type priceSKU = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  RRP: number;
};
type ResultsDisplayProps = {
  setResult: React.Dispatch<React.SetStateAction<PricingTreeSKU>>;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

function ResultsDisplay({ setResult, setViewMode }: ResultsDisplayProps) {
  // if (isLoading) return <Loader />;
  //   console.log(data)

  return (
    <div>
      <Header setViewMode={setViewMode} />
      <div></div>
      <div></div>
      <div>
        <PricingTreeCard
          Brand={product.Brand}
          SKU={""}
          CL={0}
          ABV={0}
          RRP={0}
          Duty={0}
          Import_Origin={""}
          Ex_Works={0}
        />
      </div>
    </div>
  );
}
export default ResultsDisplay;
