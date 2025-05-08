import { PricingTreeSKU } from "./functionTypes";

function sendSaveData(data: PricingTreeSKU) {
  fetch("http://localhost:3000/priceTreeData", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });
}

export default sendSaveData;
