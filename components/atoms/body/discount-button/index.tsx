import CTA from "../../cta/variant-1";
import { DiscountButtonProps } from "../../../../types/discount";

const DiscountButton = ({ onClick }: DiscountButtonProps) => {
  return <CTA onClick={onClick}>Add Discount</CTA>;
};

export default DiscountButton;
