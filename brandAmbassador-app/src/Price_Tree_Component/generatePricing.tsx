import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../Marketing_Product_Components/ProductCard";
import Button from "./Button";
import { useState } from "react";
import { ViewMode } from "../Marketing_Product_Components/ParentComponent";
import Header from "../Marketing_Product_Components/Header";
import Loader from "../Marketing_Product_Components/loader";
import PricingTreeCard from "./PricingCard";
import ProductForm from "./pricingFormZOD";
import PricingFormTan from "./PricingFormTan";
import formValueProcessing from "../Functions/formValueProcessing";

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
};
function GeneratePricing({ setViewMode }: GeneratePricingProps) {
  const { data, isLoading } = useQuery({
    queryKey: [`products`],
    queryFn: getProducts,
  });
  // await formValueProcessing;

  if (isLoading) return <Loader />;

  //   console.log(data)

  return (
    <div>
      <Header setViewMode={setViewMode} />
      <div>
        <PricingFormTan setViewMode={setViewMode} />
      </div>

      <div>
        {data.map((product: BrandSKU) => (
          <PricingTreeCard
            Brand={product.Brand}
            SKU={product.SKU}
            CL={product.CL}
            ABV={product.ABV}
            Ex_Works={product.Ex_Works}
            Product_Code={product.Product_Code}
          />
        ))}
      </div>
    </div>
  );
}
export default GeneratePricing;
