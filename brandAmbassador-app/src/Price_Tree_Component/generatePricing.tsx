import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ViewMode } from "../Main_Components/ParentComponent";
import Header from "../Main_Components/Header";
import Loader from "../Main_Components/loader";
import PricingTreeCard from "./PricingTreeCard";

import PricingFormTan from "./PricingFormTan";
import formValueProcessing from "../Functions/formValueProcessing";
import { PricingTreeSKU } from "../Functions/functionTypes";

export type BrandSKU = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  Ex_Works: number;
  Wholesale: number;
  On_Trade: number;
  RRP: number;
  Product_Code: string;
};
type GeneratePricingProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  setResult: React.Dispatch<React.SetStateAction<PricingTreeSKU | null>>;
};
function GeneratePricing({ setViewMode, setResult }: GeneratePricingProps) {
  const { data, isLoading } = useQuery({
    queryKey: [`products`],
    queryFn: getProducts,
  });
  // await formValueProcessing;

  if (isLoading) return <Loader />;

  //   console.log(data)

  return (
    <div className="homeDiv">
      <div>
        <PricingFormTan setViewMode={setViewMode} setResult={setResult} />
      </div>
      {/* 
      <div>
        {data.map((product: BrandSKU) => (
          <PricingTreeCard
            Brand={product.Brand}
            SKU={product.SKU}
            CL={product.CL}
            ABV={product.ABV}
            Ex_Works={product.Ex_Works}
          />
        ))}
      </div> */}
    </div>
  );
}
export default GeneratePricing;
