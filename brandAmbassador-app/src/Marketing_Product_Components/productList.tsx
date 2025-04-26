import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { useState } from "react";
import { ViewMode } from "../Main_Components/ParentComponent";
import Header from "../Main_Components/Header";
import Loader from "../Main_Components/loader";

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
function ProductList({ setViewMode }: ProductListProps) {
  const { data, isLoading } = useQuery({
    queryKey: [`products`],
    queryFn: getProducts,
  });

  if (isLoading) return <Loader />;

  console.log(data);

  return (
    <div className="homeDiv">
      {/* {viewing && ( */}
      <div>
        {data.map((product: BrandSKU) => (
          <ProductCard
            Brand={product.Brand}
            SKU={product.SKU}
            Wholesale={product.Wholesale}
            RRP={product.RRP}
            On_Trade={product.On_Trade}
            Product_Code={product.Product_Code}
          />
        ))}
      </div>
      {/* )} */}
    </div>
  );
}
export default ProductList;
