import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./Components/productList";
import MarketingList from "./Components/MarketingList";
import ViewMarketingBudget from "./Components/ViewMarketing";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ViewMarketingBudget />
        {/* <ProductList /> */}
        {/* <MarketingList /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
