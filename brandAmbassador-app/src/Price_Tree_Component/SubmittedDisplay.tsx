import { ViewMode } from "../Main_Components/ParentComponent";

import BackButton from "../Button_Components/BackButton";
import SubmittedCard from "./submittedCard";

export type priceSKU = {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  RRP: number;
};
type SubmittedDisplayProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

function SubmittedDisplay({ setViewMode }: SubmittedDisplayProps) {
  //   console.log(data)

  return (
    <div className="homeDiv">
      <div>
        <SubmittedCard />
      </div>
      <div id="resultsButtonContainer">
        <BackButton setViewMode={setViewMode} />
      </div>
    </div>
  );
}
export default SubmittedDisplay;
