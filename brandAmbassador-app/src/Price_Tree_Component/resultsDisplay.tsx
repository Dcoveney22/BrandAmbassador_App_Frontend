import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ViewMode } from "../Marketing_Product_Components/ParentComponent";
import Header from "../Marketing_Product_Components/Header";
import Loader from "../Marketing_Product_Components/loader";
import PricingTreeCard from "./PricingCard";
import PricingFormTan from "./PricingFormTan";
import formValueProcessing from "../Functions/formValueProcessing";

export type priceSKU = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  RRP: number;
};
type ResultsDisplayProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

async function ResultsDisplay({ setViewMode }: ResultsDisplayProps) {
  // if (isLoading) return <Loader />;
  //   console.log(data)

  return (
    <div>
      <Header setViewMode={setViewMode} />
      <div>
        <PricingFormTan setViewMode={setViewMode} />
      </div>
      <div></div>
      {/* <div>
        {valueArray.map((product: priceSKU) => (
          <PricingTreeCard
            Brand={product.Brand}
            SKU={product.SKU}
            CL={product.CL}
            ABV={product.ABV}
            RRP={product.RRP}
          />
        ))}
      </div> */}
    </div>
  );
}
export default ResultsDisplay;
