import { getProducts } from "../Functions/backEndFunction";

function ProductList() {
  const data = getProducts();
  // const arrayDataItems = data.map((product: any) => <li>{product}</li>);
  console.log(data);
  return <ul>{data}</ul>;
}
export default ProductList;
