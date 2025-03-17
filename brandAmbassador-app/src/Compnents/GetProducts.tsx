import { getProducts } from "./GetProducts";

const arrayDataItems = productData.map((product: any) => <li>{product}</li>);
return <ul>{arrayDataItems}</ul>;
