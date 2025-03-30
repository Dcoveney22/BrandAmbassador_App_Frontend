import { useState } from "react";
import Button from "./Button";
import MarketingList from "./MarketingList";
import MarketingCard from "./MarketingCard";

function ViewMarketingBudget() {
  const [showData, setShowData] = useState(false);
  const onButtonClick = () => {
    MarketingList;
  };

  return (
    <div>
      <Button onClick={onButtonClick} text="Get Marketing" />
    </div>
  );
}
export default ViewMarketingBudget;
