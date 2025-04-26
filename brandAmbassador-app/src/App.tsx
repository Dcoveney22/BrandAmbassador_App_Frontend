import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./Marketing_Product_Components/productList";
import MarketingList from "./Marketing_Product_Components/MarketingList";
import ViewMarketingBudget from "./Marketing_Product_Components/ViewMarketing";
import HomePage from "./Main_Components/HomePage";
import ParentComponent, { ViewMode } from "./Main_Components/ParentComponent";
import { PageContext } from "./Contexts/Context";
import { useState } from "react";
import { ParentComponentLayer } from "./Main_Components/ParentComponentLayer";

function App() {
  const queryClient = new QueryClient();
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.HomePage);

  return (
    <>
      <PageContext.Provider value={{ viewMode, setViewMode }}>
        <QueryClientProvider client={queryClient}>
          {/* <HomePage /> */}
          <ParentComponentLayer />
        </QueryClientProvider>
      </PageContext.Provider>
    </>
  );
}

export default App;
