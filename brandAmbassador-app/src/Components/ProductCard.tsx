import "../App.css";

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
    <div className="card">
      <div className="procuct-details">
        <img
          className="profilePhoto"
          src={`${Product_Code}_${SKU}.jpg`}
          alt=""
        />
        <p className="label">
          <h2>Brand: {Brand}</h2>
          <h3>SKU: {SKU}</h3>
          <li>Wholesale Price: £{Wholesale} </li>
          <li>On-Trade Price: £{On_Trade}</li>
          <li>RRP: £{RRP}</li>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
