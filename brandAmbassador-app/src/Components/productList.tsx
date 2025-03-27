import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

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
  if (isLoading) return <div>Price List is Loading...</div>;

  console.log(data);

  return (
    <div>
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
    </div>
  );
}
export default ProductList;
