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
    <div>
      <div>
        <img className="skuImage" src={`${Brand}_logo.jpg`} alt="" />
        <p>
          <u>
            <b>{Brand}</b>
          </u>
          <br />
          <br />
          <b>COMMUNICATE</b>
          <br />
          <br />
          Trade Shows: £{Trade_Shows} || Consumer Shows: £{Consumer_Shows} ||
          Digital Marketing: £{Digital_Marketing} || Photography: £{Photography}{" "}
          || PR: £{PR}
          <br />
          <br />
          <b>CONSUME</b>
          <br />
          <br />
          Wholesale Activations: £{Wholesale_Activations} || Retail Activations:
          £{Retail_Activations} || Other Retail Activations: £
          {Other_Retail_Activations} || Amazon Marketing: £{Amazon_Marketing} ||
          POS_Budget: £{POS_Budget}
          <br />
          <br />
          <b>CONVERT (On-Trade)</b>
          <br />
          <br />
          Activations: £{On_Trade_Activations} || Listing Fee: £
          {On_Trade_Listing_Fee} || Staff Incentives: £
          {On_Trade_Staff_Incentives}
          || Entertainment: £{On_Trade_Entertainment}
          Incidentals: £{Incidentals}
          <br />
          <br />
          <b>TOTAL</b>
          <br />
          <br />
          Totals: £{Total}
        </p>

        <hr className="separator" />
      </div>

      {/* <ViewMarketingBudget /> */}
    </div>
  );
}
export default MarketingCard;
