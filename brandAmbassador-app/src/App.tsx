import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./Components/productList";
import ProductCard from "./Components/ProductCard";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductList />
        <ProductCard />
      </QueryClientProvider>
    </>
  );
}

export default App;
