import { Product } from "../../../../types/modal";
import ItemButton from "../../../atoms/modal/item-button";

const ProductButton = ({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: Function;
}) => {
  return <ItemButton onSelect={onSelect} item={product}></ItemButton>;
};

export default ProductButton;
