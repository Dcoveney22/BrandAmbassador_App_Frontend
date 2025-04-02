import { useState } from "react";
import HomePage from "./HomePage";
import MarketingList from "./MarketingList";
import ProductList from "./productList";
import GeneratePricing from "../Price_Tree_Component/generatePricing";
import ResultsDisplay from "../Price_Tree_Component/resultsDisplay";
import { PricingTreeSKU } from "../Functions/functionTypes";

export enum ViewMode {
  HomePage,
  MarketingList,
  ProductList,
  PriceTree,
  ResultsDisplay,
}

function ParentComponent() {
  const [result, setResult] = useState<any | null>(null);
  const [foo, setFoo] = useState("foo");
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.HomePage);
  //   const [selectedPage, setSelectedPage] = useState<number>(0);
  if (viewMode === ViewMode.HomePage) {
    return <HomePage setViewMode={setViewMode} />;
  }

  if (viewMode === ViewMode.MarketingList) {
    return <MarketingList setViewMode={setViewMode} />;
  }

  if (viewMode === ViewMode.ProductList) {
    return <ProductList setViewMode={setViewMode} />;
  }

  if (viewMode === ViewMode.PriceTree) {
    return <GeneratePricing setViewMode={setViewMode} />;
  }
  if (viewMode === ViewMode.ResultsDisplay) {
    return <ResultsDisplay setViewMode={setViewMode} setResult={setResult} />;
  }
}

export default ParentComponent;
