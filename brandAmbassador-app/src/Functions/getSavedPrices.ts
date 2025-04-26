export async function getSavedPrices() {
  const response = await fetch("http://localhost:3000/savedProductData");
  const savedProductData = await response.json();
  return savedProductData;
  // console.log(productData);
}
export default getSavedPrices();
