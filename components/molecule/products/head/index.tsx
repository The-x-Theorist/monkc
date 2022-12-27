import { ReactNode } from "react";
import { H5, H6 } from "../../../atoms/heading";
import { LabelProps } from "../../../../types/head";

const Head = () => (
  <div className="flex flex-col">
    <H5 className="text-base font-semibold">Add Products</H5>
    <div className="flex mt-8 pl-16 items-center">
      <Label>Product</Label>
      <Label
        style={{
          marginLeft: "196px",
        }}
      >
        Discount
      </Label>
    </div>
  </div>
);

const Label = ({ children, ...otherProps }: LabelProps) => (
  <H6 className="text-sm font-medium" {...otherProps}>
    {children}
  </H6>
);

export default Head;
