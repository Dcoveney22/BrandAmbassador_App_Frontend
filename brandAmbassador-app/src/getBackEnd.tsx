export async function getProducts() {
  const response = await fetch("http://localhost:3000/stockSheet");
  const productData = await response.json();
  // return productData;

  const arrayDataItems = productData.map((product: any) => <li>{product}</li>);
  return arrayDataItems;
}
getProducts();
