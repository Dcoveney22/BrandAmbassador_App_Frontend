import { PricingTreeSKU } from "./functionTypes";

const testSendData: PricingTreeSKU = {
  Brand: "testBrand",
  SKU: "testSKU",
  CL: 70,
  ABV: 45,
  RRP: 22.56,
  Duty: 4,
  Import_Origin: "testImport",
  Ex_Works: 12.0,
};

function sendSaveData() {
  fetch("http://localhost:3000/priceTreeData", {
    method: "POST",
    body: JSON.stringify({ testSendData }),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });
}

export default sendSaveData;
