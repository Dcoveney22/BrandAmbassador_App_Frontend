import { SetStateAction } from "react";
import Button from "../Marketing_Product_Components/Button";
import HomePageButton from "../Button_Components/HomePageButton";
import MarketingList from "../Marketing_Product_Components/MarketingList";
import { ViewMode } from "../Main_Components/ParentComponent";
import ProductList from "../Marketing_Product_Components/productList";
import Header from "./Header";
import { PageContext, useContextAndErrorIfNull } from "../Contexts/Context";

type HomePageProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

function HomePage() {
  const { setViewMode } = useContextAndErrorIfNull(PageContext);
  return (
    <div className="homDiv">
      {/* <Header setViewMode={setViewMode} /> */}
      <div className="card">
        <img
          className="homeCard"
          src="image_bottles.jpg"
          onClick={() => {
            setViewMode(ViewMode.ProductList);
          }}
        />
        <p className="homeTitle">PRICE LIST</p>
      </div>

      <div className="card">
        <img
          className="homeCardMarketing"
          src="marketing.png"
          onClick={() => {
            setViewMode(ViewMode.MarketingList);
          }}
        />
        <p className="homeTitle">MARKETING BUDGETS</p>
      </div>

      <div className="card">
        <img
          className="homeCardMarketing"
          src="marketing.png"
          onClick={() => {
            setViewMode(ViewMode.PriceTree);
          }}
        />
        <p className="homeTitle">PRICING</p>
      </div>
    </div>
  );
}
export default HomePage;
