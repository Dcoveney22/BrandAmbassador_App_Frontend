import { PricingTreeSKU } from "./functionTypes";

const testSendData: PricingTreeSKU = {
  Brand: "testBrand",
  SKU: "testSKU",
  CL: 70,
  ABV: 45,
  Import_Origin: "testImport",
  Ex_Works: 12.0,
  Duty: 4,
  RRP: 22.56,
};

function sendSaveData(data) {
  fetch("http://localhost:3000/priceTreeData", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });
}

export default sendSaveData;
