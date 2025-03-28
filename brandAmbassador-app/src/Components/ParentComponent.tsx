import { useState } from "react";
import HomePage from "./HomePage";
import MarketingList from "./MarketingList";
import ProductList from "./productList";

export enum ViewMode {
  HomePage,
  MarketingList,
  ProductList,
}

function ParentComponent() {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.HomePage);
  const [selectedPage, setSelectedPage] = useState<number>(0);

  if (viewMode === ViewMode.HomePage) {
    return (
      <HomePage setSelectedPage={setSelectedPage} setViewMode={setViewMode} />
    );
  }

  if (viewMode === ViewMode.MarketingList) {
    return (
      <MarketingList
        setSelectedPage={setSelectedPage}
        setViewMode={setViewMode}
      />
    );
  }

  if (viewMode === ViewMode.ProductList) {
    return (
      <ProductList
        setSelectedPage={setSelectedPage}
        setViewMode={setViewMode}
      />
    );
  }
}

export default ParentComponent;
