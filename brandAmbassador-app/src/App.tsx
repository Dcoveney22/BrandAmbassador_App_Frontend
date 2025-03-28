import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./Components/productList";
import MarketingList from "./Components/MarketingList";
import ViewMarketingBudget from "./Components/ViewMarketing";
import HomePage from "./Components/HomePage";
import ParentComponent from "./Components/ParentComponent";

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
