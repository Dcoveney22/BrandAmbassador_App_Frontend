export class FormDataSKU {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  Import_Origin: string;
  Ex_Works: number;

  constructor(
    Brand: string,
    SKU: string,
    CL: number,
    ABV: number,
    Import_Origin: string,
    Ex_Works: number
  ) {
    this.Brand = Brand;
    this.SKU = SKU;
    this.CL = CL;
    this.ABV = ABV;
    this.Import_Origin = Import_Origin;
    this.Ex_Works = Ex_Works;
  }
}

export class PricingTreeSKU extends FormDataSKU {
  Duty: number;
  RRP: number;

  constructor(formDataSKU: FormDataSKU, Duty: number, RRP: number) {
    super(
      formDataSKU.Brand,
      formDataSKU.SKU,
      formDataSKU.CL,
      formDataSKU.ABV,
      formDataSKU.Import_Origin,
      formDataSKU.Ex_Works
    );
    this.Duty = Duty;
    this.RRP = RRP;
  }
}
