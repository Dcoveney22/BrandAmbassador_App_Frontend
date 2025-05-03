import "../App.css";

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
