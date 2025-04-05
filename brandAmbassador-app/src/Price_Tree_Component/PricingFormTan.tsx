import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { ViewMode } from "../Main_Components/ParentComponent";
import formValueProcessing from "../Functions/formValueProcessing";
import HomePageButton from "../Button_Components/HomePageButton";
import { PricingTreeSKU } from "../Functions/functionTypes";

type PricingFormTanProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  setResult: React.Dispatch<React.SetStateAction<PricingTreeSKU | null>>;
};

interface PricingFormValues {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  Import_Origin: string;
  Ex_Works: number;
}
function PricingFormTan({ setViewMode, setResult }: PricingFormTanProps) {
  // const pricingFormTan: React.FC = () => {
  const form = useForm({
    defaultValues: {
      Brand: "",
      SKU: "",
      CL: 0,
      ABV: 0,
      Import_Origin: "EU",
    } as PricingTreeSKU,
    onSubmit: async ({ value }) => {
      setResult(await formValueProcessing(value));
      setViewMode(ViewMode.ResultsDisplay);

      // alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <form
      className="productFormCard"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <h1>Submit Product</h1>
      <form.Field
        name="Brand"
        validators={{
          onChange: ({ value }) =>
            value === "" ? "please add an a answer" : undefined,
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="Brand">Brand Name</label>
            <input
              type="Brand"
              id="Brand"
              name="Brand"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors.length > 0 && (
              <em>{field.state.meta.errors.join(", ")}</em>
            )}
          </div>
        )}
      </form.Field>
      <form.Field
        name="SKU"
        validators={{
          onChange: ({ value }) =>
            value === "" ? "please add an a answer" : undefined,
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="SKU">SKU Name</label>
            <input
              type="text"
              id="SKU"
              name="SKU"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors.length > 0 && (
              <em>{field.state.meta.errors.join(", ")}</em>
            )}
          </div>
        )}
      </form.Field>
      <form.Field
        name="CL"
        validators={{
          onChange: ({ value }) =>
            value <= 0 || null ? "please select one" : undefined,
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="CL">Product Size(cl)</label>
            <input
              type="number"
              id="CL"
              name="CL"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.valueAsNumber)}
            />
            {field.state.meta.errors.length > 0 && (
              <em>{field.state.meta.errors.join(", ")}</em>
            )}
          </div>
        )}
      </form.Field>

      <form.Field
        name="ABV"
        validators={{
          onChange: ({ value }) =>
            value <= 0 || null ? "please add an answer" : undefined,
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="ABV">ABV(%)</label>
            <input
              type="number"
              id="ABV"
              name="ABV"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.valueAsNumber)}
            />
            {field.state.meta.errors.length > 0 && (
              <em>{field.state.meta.errors.join(", ")}</em>
            )}
          </div>
        )}
      </form.Field>

      <form.Field
        name="Import_Origin"
        validators={{
          onChange: ({ value }) =>
            value === "" ? "please select one" : undefined,
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="Import_Origin">Import Origin(please Select)</label>
            <select
              id="Import_Origin"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            >
              <option value="EU">EU(West)</option>
              <option value="USA">USA & Americas</option>
              <option value="Australia">Australia/New Zealand</option>
              <option value="Africa">Africas</option>
            </select>
            {field.state.meta.errors.length > 0 && (
              <em>{field.state.meta.errors.join(", ")}</em>
            )}
          </div>
        )}
      </form.Field>
      <form.Field
        name="Ex_Works"
        validators={{
          onChange: ({ value }) =>
            value <= 0 || null ? "please add an answer" : undefined,
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="Ex_Works">Ex-Works Price(£)</label>
            <input
              type="number"
              id="Ex_Works"
              name="Ex_Works"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.valueAsNumber)}
            />
            {field.state.meta.errors.length > 0 && (
              <em>{field.state.meta.errors.join(", ")}</em>
            )}
          </div>
        )}
      </form.Field>

      <button onClick={form.handleSubmit}>Submit Product</button>
    </form>
  );
}
// }

export default PricingFormTan;
