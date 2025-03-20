import { useQuery } from "@tanstack/react-query";
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

const exampleData: BrandSKU[] = [
  {
    Brand: "Cottey Vetsy",
    SKU: "Espadin",
    CL: 700,
    ABV: 46,
    Wholesale: 38,
    RRP: 65.14,
    Ex_Works: 22.36,
    On_Trade: 46.06,
    Product_Code: "CV1",
  },
  {
    Brand: "Uppour Gin",
    SKU: "C & C",
    CL: 700,
    ABV: 40,
    Wholesale: 24.88,
    RRP: 41.5,
    Ex_Works: 14.3,
    On_Trade: 30.16,
    Product_Code: "UG1",
  },
];

function ProductCard() {
  for (let i = 0; i < exampleData.length; i++) {
    if ((exampleData[i].Product_Code = "CV1")) {
    }
    return (
      <div>
        <img
          className="skuImage"
          src={`${exampleData[i].Product_Code}_${exampleData[i].SKU}.jpg`}
          alt=""
        />
        <p>
          Brand: {exampleData[i].Brand}
          <br />
          SKU: {exampleData[i].SKU}
          <br />
          Wholesale Price: £{exampleData[i].Wholesale} || On-Trade Price: £
          {exampleData[i].On_Trade} || RRP: £{exampleData[i].RRP}
        </p>
      </div>
    );
  }
  //   exampleData.map((product) => {
  //     return (
  //       <div>
  //         <img
  //           className="skuImage"
  //           src={`${product.Product_Code}_${product.SKU}.jpg`}
  //           alt=""
  //         />
  //         <p>
  //           Brand: {product.Brand}
  //           <br />
  //           SKU: {product.SKU}
  //           <br />
  //           Wholesale Price: £{product.Wholesale} || On-Trade Price: £
  //           {product.On_Trade} || RRP: £{product.RRP}
  //         </p>
  //       </div>
  //     );
  //   });
}
export default ProductCard;
