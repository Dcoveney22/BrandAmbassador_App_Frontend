import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { useState } from "react";

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

function ProductList() {
  const { data, isLoading } = useQuery({
    queryKey: [`products`],
    queryFn: getProducts,
  });

  const [viewing, setViewing] = useState(false);
  const viewProducts = () => {
    setViewing(true);
  };
  const stopViewing = () => {
    setViewing(false);
  };
  if (isLoading) return <div>Price List is Loading...</div>;

  console.log(data);

  return (
    <div>
      {viewing && (
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
      )}
      <div>
        <Button onClick={viewProducts} text="Get Price List" />
      </div>
    </div>
  );
}
export default ProductList;
