import { DiscountInput } from "../../../../types/discount";
import Input from "../../input";

const DiscountInput = ({
  value,
  onChange,
  rounded,
  discountType,
  maxDiscount,
}: DiscountInput) => {
  return (
    <Input
      value={value}
      type="number"
      limit={
        discountType === "% Off" || discountType === "% Off "
          ? 101
          : maxDiscount + 1
      }
      onChange={onChange}
      rounded={rounded}
    ></Input>
  );
};

export default DiscountInput;
