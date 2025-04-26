import "../App.css";

export type SavedProductProps = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  Import_Origin: string;
  Ex_Works: number;
  Duty: number;
  RRP: number;
};

function SavedProductCard({
  Brand,
  SKU,
  CL,
  ABV,
  Import_Origin,
  Ex_Works,
  Duty,
  RRP,
}: SavedProductProps) {
  return (
    <div className="productCard">
      <div className="insideDiv">
        <p className="label">
          <p className="brandTitle">{Brand}</p>
          <p className="brandSpace"></p>
          <p className="miniTitle">SKU: {SKU}</p>
          <p className="budgetItems">
            <li>Bottle Size(CL): {CL}</li>
            <li>Import_Origin: {Import_Origin}</li>
            <li>ABV: {ABV} </li>
            <li>Ex_Works: £{Ex_Works}</li>
            <li>Duty: £{Duty}</li>
            <li>RRP: £{RRP}</li>
          </p>
        </p>
      </div>
    </div>
  );
}

export default SavedProductCard;
