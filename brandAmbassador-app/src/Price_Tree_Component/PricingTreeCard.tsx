import "../App.css";
import { PricingTreeSKU } from "../Functions/functionTypes";

// type BrandSKU = {
//   Brand: string;
//   SKU: string;
//   CL: number;
//   ABV: number;
//   Ex_Works: number;
//   Wholesale: number;
//   On_Trade: number;
//   RRP: number;
//   Product_Code: string;
// };

type PricingProps = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  // Import_Origin: string;
  // Ex_Works: number;
  // Duty: number;
  RRP: number;
};

function PricingTreeCard({
  Brand,
  SKU,
  CL,
  ABV,
  Import_Origin,
  Ex_Works,
  Duty,
  RRP,
}: PricingTreeSKU) {
  return (
    <div className="productCard">
      <div className="insideDiv">
        {/* <img
          className="profilePhoto"
          src={`${Product_Code}_${SKU}.jpg`}
          alt=""
        /> */}
        <p className="label">
          <p className="brandTitle">{Brand}</p>
          <p className="miniTitle">SKU: {SKU}</p>
          <p className="budgetItems">
            <li>Brand: {Brand}</li>
            <li>Import Origin: {Import_Origin}</li>
            <li>Ex-Works: {Ex_Works}</li>
            <li>Duty: {Duty}</li>
            <li>Size(cl): {CL}</li>
            <li>ABV(%): {ABV}</li>
            <li>RRP: £{RRP}</li>
          </p>
        </p>
      </div>
    </div>
  );
}

export default PricingTreeCard;
