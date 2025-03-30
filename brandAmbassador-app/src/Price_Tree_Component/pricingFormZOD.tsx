import { useRef, useState } from "react";
import { z } from "zod";

export type FormSKU = {
  push(formValues: { [k: string]: FormDataEntryValue }): unknown;
  SKU: string;
  CL: number;
  ABV: number;
};
const resultsArray: FormSKU = [];

const userSchema = z.object({
  SKU: z.string(),
  CL: z.number(),
  ABV: z.number(),
});

function ProductForm() {
  function formAction(formData: FormSKU) {
    const formValues = Object.fromEntries(formData);
    const result = userSchema.safeParse(formValues);

    if (result.success) {
      result.data.SKU;
      result.data.CL;
      result.data.ABV;
    }
    return resultsArray.push(formValues);
    console.log(resultsArray);
  }

  return (
    <div className="productCard">
      <form action={formAction}>
        <p>
          SKU
          <input type="text" name="SKU" />
        </p>
        <p>
          SIZE(cl)
          <input type="text" name="CL" />
        </p>
        <p>
          ABV(%)
          <input type="text" name="ABV" />
        </p>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default ProductForm;
