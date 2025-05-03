import "../App.css";

type ProductProps = {
  Brand: string;
  SKU: string;
  Wholesale: number;
  On_Trade: number;
  RRP: number;
  Product_Code: string;
};

function ProductCard({
  Brand,
  SKU,
  Wholesale,
  RRP,
  On_Trade,
  Product_Code,
}: ProductProps) {
  return (
    <div className="productCard">
      <div className="insideDiv">
        <img
          className="profilePhoto"
          src={`${Product_Code}_${SKU}.jpg`}
          alt=""
        />
        <p className="label">
          <p className="brandTitle">{Brand}</p>
          <p className="brandSpace"></p>
          <p className="miniTitle">SKU: {SKU}</p>
          <p className="budgetItems">
            <li>Wholesale Price: £{Wholesale} </li>
            <li>On-Trade Price: £{On_Trade}</li>
            <li>RRP: £{RRP}</li>
          </p>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
