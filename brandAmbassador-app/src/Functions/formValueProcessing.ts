import { FormDataSKU, PricingTreeSKU } from "./functionTypes";

async function formValueProcessing(value: FormDataSKU) {
  let duty = 0;
  let rrp = 0;
  const abvSize = value.ABV * (value.CL / 100);
  if (value.ABV <= 22) {
    duty = (29.54 / 100) * abvSize;
    rrp = value.Ex_Works + duty * 1.3;
  } else {
    duty = (32.79 / 100) * abvSize;
    rrp = value.Ex_Works + duty * 1.3;
  }
  const priceTreeFinal = new PricingTreeSKU(value, duty, rrp);
  console.log(priceTreeFinal);
}

export default formValueProcessing;
