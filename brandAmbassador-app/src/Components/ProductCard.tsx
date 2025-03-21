import BrandSKU from "./productList";
import "../App.css";

type BrandSKU = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  Ex_Works: number;
  Wholesale: number;
  On_Trade: number;
  RRP: number;
  Product_Code: string;
};

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
    <div>
      <img className="skuImage" src={`${Product_Code}_${SKU}.jpg`} alt="" />
      <p>
        Brand: {Brand}
        <br />
        SKU: {SKU}
        <br />
        Wholesale Price: £{Wholesale} || On-Trade Price: £{On_Trade} || RRP: £
        {RRP}
      </p>
      <hr className="separator" />
    </div>
  );
}

export default ProductCard;
