import { getProducts } from "./GetProducts";

function ShowData() {
  const arrayDataItems = productData.map((product: any) => <li>{product}</li>);

  return <ul>{arrayDataItems}</ul>;
}
export default ShowData;
