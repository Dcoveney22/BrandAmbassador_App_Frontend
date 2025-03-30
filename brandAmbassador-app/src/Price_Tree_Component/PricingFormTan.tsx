import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { ViewMode } from "../Marketing_Product_Components/ParentComponent";

type PricingFormTanProps = {
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

interface PricingFormValues {
  SKU: string;
  CL: number;
  ABV: number;
  Import_Origin: string;
}
function PricingFormTan({ setViewMode }: PricingFormTanProps) {
  //   const pricingFormTan: React.FC = () => {
  const form = useForm({
    defaultValues: {
      SKU: "",
      CL: 0,
      ABV: 0,
      Import_Origin: "EU",
    } as PricingFormValues,
    onSubmit: async ({ value }) => {
      alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <form
      className="productCard"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <h1>Submit Product</h1>
      <form.Field
        name="SKU"
        validators={{
          onChange: (value) =>
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
            value === 0 ? "please select one" : undefined,
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="CL">Product Size(cl)</label>
            <input
              type="text"
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
        name="CL"
        validators={{
          onChange: ({ value }) =>
            value === 0 ? "please add an answer" : undefined,
        }}
      >
        {(field) => (
          <div>
            <label htmlFor="ABV">ABV(%)</label>
            <input
              type="text"
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
    </form>
  );
}
// }

export default PricingFormTan;
