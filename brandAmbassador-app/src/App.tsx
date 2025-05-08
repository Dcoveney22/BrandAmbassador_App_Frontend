import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParentComponent, { ViewMode } from "./Main_Components/ParentComponent";
import { PageContext } from "./Contexts/Context";
import { useState } from "react";
import Layout from "./Main_Components/Layout";

function App() {
  const queryClient = new QueryClient();
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.HomePage);

  return (
    <>
      <PageContext.Provider value={{ viewMode, setViewMode }}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <ParentComponent />
          </Layout>
        </QueryClientProvider>
      </PageContext.Provider>
    </>
  );
}

export default App;
