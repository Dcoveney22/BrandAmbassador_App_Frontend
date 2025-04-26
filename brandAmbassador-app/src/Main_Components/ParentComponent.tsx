import { useState } from "react";
import HomePage from "../Main_Components/HomePage";
import MarketingList from "../Marketing_Product_Components/MarketingList";
import ProductList from "../Marketing_Product_Components/productList";
import GeneratePricing from "../Price_Tree_Component/generatePricing";
import ResultsDisplay from "../Price_Tree_Component/ResultsDisplay";
import { PricingTreeSKU } from "../Functions/functionTypes";
import HeaderCopy from "./Header_copy";
import { PageContext, useContextAndErrorIfNull } from "../Contexts/Context";

export enum ViewMode {
  HomePage,
  MarketingList,
  ProductList,
  PriceTree,
  ResultsDisplay,
}

function ParentComponent() {
  const [result, setResult] = useState<PricingTreeSKU | null>(null);
  const { viewMode, setViewMode } = useContextAndErrorIfNull(PageContext);

  if (viewMode === ViewMode.HomePage) {
    return <HomePage />;
  }

  if (viewMode === ViewMode.MarketingList) {
    return <MarketingList setViewMode={setViewMode} />;
  }

  if (viewMode === ViewMode.ProductList) {
    return <ProductList setViewMode={setViewMode} />;
  }

  if (viewMode === ViewMode.PriceTree) {
    return <GeneratePricing setViewMode={setViewMode} setResult={setResult} />;
  }
  if (viewMode === ViewMode.ResultsDisplay && result !== null) {
    return <ResultsDisplay setViewMode={setViewMode} result={result} />;
  }
}

export default ParentComponent;

//layout component now
