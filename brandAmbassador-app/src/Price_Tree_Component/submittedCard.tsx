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

function SubmittedCard() {
  return (
    <div className="productCard">
      <div className="insideDiv">
        <p className="label">
          <p className="brandTitle">THANK YOU FOR SUBMITTING</p>
          <p className="budgetItems">
            <li>The product has been stored</li>
          </p>
        </p>
      </div>
    </div>
  );
}

export default SubmittedCard;
