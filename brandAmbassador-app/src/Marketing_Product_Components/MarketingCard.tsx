import "../App.css";

type MarketingProps = {
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

function MarketingCard({
  Brand,
  Trade_Shows,
  Consumer_Shows,
  Digital_Marketing,
  Photography,
  PR,
  Wholesale_Activations,
  Retail_Activations,
  Other_Retail_Activations,
  Amazon_Marketing,
  POS_Budget,
  On_Trade_Activations,
  On_Trade_Listing_Fee,
  On_Trade_Staff_Incentives,
  On_Trade_Entertainment,
  Incidentals,
  Total,
}: MarketingProps) {
  return (
    <div className="homeDiv">
      <div className="marketingCard">
        <div className="insideDiv">
          <img
            className="marketingProfilePhoto"
            src={`${Brand}_logo.jpg`}
            alt=""
          />
          <p>
            <p className="brandTitle">
              <u>{Brand}</u>
            </p>
            <div className="brandSpace"></div>
            <div>
              <p className="miniTitle">COMMUNICATE</p>
              <div className="budgetItems">
                <li>Trade Shows: £{Trade_Shows}</li>
                <li>Consumer Shows: £{Consumer_Shows}</li>
                <li>Digital Marketing: £{Digital_Marketing}</li>
                <li>Photography: £{Photography}</li>
                <li>PR: £{PR}</li>
              </div>
              <p className="miniTitle">CONSUME</p>
              <div className="budgetItems">
                <li>Wholesale Activations: £{Wholesale_Activations}</li>
                <li>Retail Activations: £{Retail_Activations}</li>
                <li>Other Retail Activations: £{Other_Retail_Activations}</li>
                <li>Amazon Marketing: £{Amazon_Marketing}</li>
                <li>POS_Budget: £{POS_Budget}</li>
              </div>
              <p className="miniTitle">CONVERT (On-Trade)</p>
              <div className="budgetItems">
                <li>Activations: £{On_Trade_Activations}</li>
                <li>Listing Fee: £{On_Trade_Listing_Fee}</li>
                <li>Staff Incentives: £{On_Trade_Staff_Incentives}</li>
                <li>Entertainment: £{On_Trade_Entertainment}</li>
                <li>Incidentals: £{Incidentals}</li>
                <p className="totals">TOTALS £{Total}</p>
              </div>
            </div>
          </p>
        </div>
      </div>
      {/* <ViewMarketingBudget /> */}
    </div>
  );
}
export default MarketingCard;
