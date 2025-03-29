import { SetStateAction } from "react";
import Button from "./Button";
import HomePageButton from "./HomePageButton";
import MarketingList from "./MarketingList";
import { ViewMode } from "./ParentComponent";
import ProductList from "./productList";
import Header from "./Header";

type HomePageProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

function HomePage({ setViewMode }: HomePageProps) {
  return (
    <div>
      <Header setViewMode={setViewMode} />
      <div className="card">
        <img
          className="homeCard"
          src="image_bottles.jpg"
          onClick={() => {
            setViewMode(ViewMode.ProductList);
          }}
        />
        <h2>PRICE LIST</h2>
      </div>

      <div className="card">
        <img
          className="homeCardMarketing"
          src="marketing.png"
          alt=""
          onClick={() => {
            setViewMode(ViewMode.MarketingList);
          }}
        />
        <h2>MARKETING BUDGETS</h2>
      </div>
    </div>
  );
}
export default HomePage;
