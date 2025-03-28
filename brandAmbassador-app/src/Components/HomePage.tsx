import MarketingList from "./MarketingList";
import { ViewMode } from "./ParentComponent";
import ProductList from "./productList";

type HomePageProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

function HomePage({ setViewMode }: HomePageProps) {
  return (
    <div>
      <MarketingList setViewMode={setViewMode} />
      <ProductList setViewMode={setViewMode} />
    </div>
  );
}
export default HomePage;
