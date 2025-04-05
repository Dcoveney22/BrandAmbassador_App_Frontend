import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./Marketing_Product_Components/productList";
import MarketingList from "./Marketing_Product_Components/MarketingList";
import ViewMarketingBudget from "./Marketing_Product_Components/ViewMarketing";
import HomePage from "./Main_Components/HomePage";
import ParentComponent from "./Main_Components/ParentComponent";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <HomePage /> */}
        <ParentComponent />
      </QueryClientProvider>
    </>
  );
}

export default App;
