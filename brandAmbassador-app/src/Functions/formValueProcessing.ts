import { BrandSKU } from "../Price_Tree_Component/generatePricing";
import { FormDataSKU, PricingTreeSKU } from "./functionTypes";
const goodsIn = 0.16;
const warehouseRent = 0.36;
const deliveryCost = 0.85;
const euShipping = 1.0;
const americasShipping = 2.0;
const africasShipping = 2.5;
const oceanaShipping = 3.0;

export async function formValueProcessing(formResult: PricingTreeSKU) {
  const newArray = [];
  const setCosts = goodsIn + warehouseRent + deliveryCost;
  let importCost = 0;
  let duty = 0;
  let rrp = 0;

  if (formResult.Import_Origin === "EU(West)") {
    importCost = euShipping;
  }
  if (formResult.Import_Origin === "USA & Americas") {
    importCost = americasShipping;
  }
  if (formResult.Import_Origin === "Australia/NewZealand") {
    importCost = oceanaShipping;
  }
  if (formResult.Import_Origin === "Africas") {
    importCost = africasShipping;
  }
  const abvSize = formResult.ABV * (formResult.CL / 100);
  if (formResult.ABV <= 22) {
    duty = (29.54 / 100) * abvSize;
    rrp = formResult.Ex_Works + duty + setCosts + importCost * 1.3;
  } else {
    duty = (32.79 / 100) * abvSize;
    rrp = formResult.Ex_Works + duty + setCosts + importCost * 1.3;
  }

  const result = new PricingTreeSKU(formResult, duty, rrp);
  return result;
}

export default formValueProcessing;
