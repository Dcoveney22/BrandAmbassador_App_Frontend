import { getProducts } from "../Functions/getProducts";
import { useQuery } from "@tanstack/react-query";
import { ViewMode } from "../Main_Components/ParentComponent";
import Loader from "../Main_Components/loader";
import PricingFormTan from "./PricingFormTan";
import { PricingTreeSKU } from "../Functions/functionTypes";
import { SavedButtonIcon } from "../icons/SavedProductIcon";

export type BrandSKU = {
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
type GeneratePricingProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  setResult: React.Dispatch<React.SetStateAction<PricingTreeSKU | null>>;
};
function GeneratePricing({ setViewMode, setResult }: GeneratePricingProps) {
  const { data, isLoading } = useQuery({
    queryKey: [`products`],
    queryFn: getProducts,
  });
  // await formValueProcessing;

  if (isLoading) return <Loader />;

  //   console.log(data)

  return (
    <div className="homeDiv">
      <div>
        <PricingFormTan setViewMode={setViewMode} setResult={setResult} />
      </div>

      <div
        className="card"
        onClick={() => {
          setViewMode(ViewMode.SavedPriceProducts);
        }}
      >
        <SavedButtonIcon id="priceListIcon" />

        <p className="homeTitle">VIEW SAVED PRODUCTS</p>
      </div>
    </div>
  );
}
export default GeneratePricing;
