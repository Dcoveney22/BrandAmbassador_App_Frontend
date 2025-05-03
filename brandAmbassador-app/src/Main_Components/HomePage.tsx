import { ViewMode } from "../Main_Components/ParentComponent";
import { PageContext, useContextAndErrorIfNull } from "../Contexts/Context";
import { PriceListIcon } from "../icons/PriceListIcon";
import { MarketingIcon } from "../icons/MarketingIcon";
import { PricingIcon } from "../icons/pricingIcon";

type HomePageProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

function HomePage() {
  const { setViewMode } = useContextAndErrorIfNull(PageContext);
  return (
    <div className="homeDiv">
      <div
        className="card"
        onClick={() => {
          setViewMode(ViewMode.ProductList);
        }}
      >
        <PriceListIcon id="priceListIcon" />

        <p className="homeTitle">PRICE LIST</p>
      </div>

      <div
        className="card"
        onClick={() => {
          setViewMode(ViewMode.MarketingList);
        }}
      >
        <MarketingIcon />

        <p className="homeTitle">MARKETING BUDGETS</p>
      </div>

      <div
        className="card"
        onClick={() => {
          setViewMode(ViewMode.PriceTree);
        }}
      >
        <PricingIcon />

        <p className="homeTitle">PRICING</p>
      </div>
    </div>
  );
}
export default HomePage;
