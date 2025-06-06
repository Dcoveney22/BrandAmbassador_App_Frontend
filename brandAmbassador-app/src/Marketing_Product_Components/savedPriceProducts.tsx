import { useQuery } from "@tanstack/react-query";
import { ViewMode } from "../Main_Components/ParentComponent";
import Loader from "../Main_Components/loader";
import { getSavedPrices } from "../Functions/getSavedPrices";
import SavedProductCard, { SavedProductProps } from "./SavedPriceCard";
import BackButton from "../Button_Components/BackButton";

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
type ProductListProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};
function SavedProductList({ setViewMode }: ProductListProps) {
  const { data, isLoading } = useQuery({
    queryKey: [`products`],
    queryFn: getSavedPrices,
  });

  if (isLoading) return <Loader />;

  console.log(data);

  return (
    <div className="homeDiv">
      {/* {viewing && ( */}
      <div>
        {data.map((product: SavedProductProps) => (
          <SavedProductCard
            Brand={product.Brand}
            SKU={product.SKU}
            CL={product.CL}
            ABV={product.ABV}
            Import_Origin={product.Import_Origin}
            Ex_Works={product.Ex_Works}
            Duty={product.Duty}
            RRP={product.RRP}
          />
        ))}
      </div>
      <div id="resultsButtonContainer">
        <BackButton setViewMode={setViewMode} />
      </div>
    </div>
  );
}
export default SavedProductList;
