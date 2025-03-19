import { getProducts } from "../Functions/backEndFunction";
import { useQuery } from "@tanstack/react-query";

type BrandSKU = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  Ex_Works: number;
  Wholesale: number;
  On_Trade: number;
  RRP: number;
};

function ProductList() {
  const { data, isLoading } = useQuery({
    queryKey: [`products`],
    queryFn: getProducts,
  });
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      <ol>
        {data.map((product: BrandSKU) => (
          <li>
            {product.SKU} {product.Brand}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ProductList;
