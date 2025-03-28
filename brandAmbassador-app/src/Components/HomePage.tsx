import MarketingList from "./MarketingList";
import { ViewMode } from "./ParentComponent";
import ProductList from "./productList";

type HomePageProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

function HomePage({ setSelectedPage, setViewMode }: HomePageProps) {
  return (
    <div>
      <MarketingList
        setSelectedPage={setSelectedPage}
        setViewMode={setViewMode}
      />
      <ProductList
        setSelectedPage={setSelectedPage}
        setViewMode={setViewMode}
      />
    </div>
  );
}
export default HomePage;
