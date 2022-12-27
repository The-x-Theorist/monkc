import ProductButton from "../product-button";
import { VariantProductButtonProps } from "../../../../types/products/variant";

const VariantProductButton = ({ title }: VariantProductButtonProps) => (
  <ProductButton
    edit={false}
    rounded="full"
    title={title}
    w="small"
  ></ProductButton>
);

export default VariantProductButton;
