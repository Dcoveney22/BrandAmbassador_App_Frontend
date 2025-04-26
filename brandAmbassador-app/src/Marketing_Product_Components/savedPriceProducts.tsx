import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { useState } from "react";
import { ViewMode } from "../Main_Components/ParentComponent";
import Header from "../Main_Components/Header";
import Loader from "../Main_Components/loader";
import { getSavedPrices } from "../Functions/getSavedPrices";
import SavedProductCard, { SavedProductProps } from "./SavedPriceCard";

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
type ProductListProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};
function SavedProductList({ setViewMode }: ProductListProps) {
  const { data, isLoading } = useQuery({
    queryKey: [`products`],
    queryFn: getSavedPrices,
  });

  if (isLoading) return <Loader />;

  console.log(data);

  return (
    <div className="homeDiv">
      {/* {viewing && ( */}
      <div>
        {data.map((product: SavedProductProps) => (
          <SavedProductCard
            Brand={product.Brand}
            SKU={product.SKU}
            CL={product.CL}
            ABV={product.ABV}
            Import_Origin={product.Import_Origin}
            Ex_Works={product.Ex_Works}
            Duty={product.Duty}
            RRP={product.RRP}
          />
        ))}
      </div>
      {/* )} */}
    </div>
  );
}
export default SavedProductList;
