import { getProducts } from "../Functions/backEndFunction";

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
async function ProductList() {
  const importArray: BrandSKU[] = await getProducts();
  const arrayDataItems = importArray.map((product: BrandSKU) => (
    <li>
      {product.SKU} {product.Brand}
    </li>
  ));
  console.log(importArray);

  return (
    <div>
      <ol>{arrayDataItems}</ol>
    </div>
  );
}
export default ProductList();
