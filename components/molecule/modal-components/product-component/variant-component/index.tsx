import { VariantButtonProps } from "../../../../../types/modal";
import ItemButton from "../../../../atoms/modal/item-button";

const VariantButton = ({ variant, onSelect }: VariantButtonProps) => {
  return (
    <ItemButton
      onSelect={onSelect}
      item={variant}
      variant={true}
    ></ItemButton>
  );
};

export default VariantButton;
