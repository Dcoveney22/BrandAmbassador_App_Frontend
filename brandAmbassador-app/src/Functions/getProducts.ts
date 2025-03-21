export async function getProducts() {
  const response = await fetch("http://localhost:3000/stockSheet");
  const productData = await response.json();
  return productData;
  // console.log(productData);
}
export default getProducts();
