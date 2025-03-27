export async function getMarketing() {
  const response = await fetch("http://localhost:3000/marketingSheet");
  const productData = await response.json();
  return productData;
  //   console.log(productData);
}
export default getMarketing();
