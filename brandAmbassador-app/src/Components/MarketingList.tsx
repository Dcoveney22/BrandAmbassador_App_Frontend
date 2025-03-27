import { getMarketing } from "../Functions/getMarketing";
import { useQuery } from "@tanstack/react-query";
import MarketingCard from "./MarketingCard";

export type MarketingBudget = {
  Brand: string;
  Trade_Shows: number;
  Consumer_Shows: number;
  Digital_Marketing: number;
  Photography: number;
  PR: number;
  Wholesale_Activations: number;
  Retail_Activations: number;
  Other_Retail_Activations: number;
  Amazon_Marketing: number;
  POS_Budget: number;
  On_Trade_Activations: number;
  On_Trade_Listing_Fee: number;
  On_Trade_Staff_Incentives: number;
  On_Trade_Entertainment: number;
  Incidentals: number;
  Total: number;
};

function MarketingList() {
  const { data: dataM, isLoading } = useQuery({
    queryKey: [`marketing`],
    queryFn: getMarketing,
  });
  if (isLoading) return <div>Marketing is Loading...</div>;

  console.log(dataM);

  return (
    <div>
      <div>
        {dataM.map((budget: MarketingBudget) => (
          <MarketingCard
            Brand={budget.Brand}
            Trade_Shows={budget.Trade_Shows}
            Consumer_Shows={budget.Consumer_Shows}
            Digital_Marketing={budget.Digital_Marketing}
            Photography={budget.Photography}
            PR={budget.PR}
            Wholesale_Activations={budget.Wholesale_Activations}
            Retail_Activations={budget.Retail_Activations}
            Other_Retail_Activations={budget.Other_Retail_Activations}
            Amazon_Marketing={budget.Amazon_Marketing}
            POS_Budget={budget.POS_Budget}
            On_Trade_Activations={budget.On_Trade_Activations}
            On_Trade_Listing_Fee={budget.On_Trade_Listing_Fee}
            On_Trade_Staff_Incentives={budget.On_Trade_Staff_Incentives}
            On_Trade_Entertainment={budget.On_Trade_Entertainment}
            Incidentals={budget.Incidentals}
            Total={budget.Total}
          />
        ))}
      </div>
    </div>
  );
}
export default MarketingList;
