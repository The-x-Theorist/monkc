import Image from "next/image";
import DropDownIcon from "../../../../public/product/drop-variant-2/drop-down-icon.svg";
import DropUpIcon from "../../../../public/product/drop-variant-2/drop-up-icon.svg";
import {
  VariantButtonContainerProps,
  VariantButtonLabelProps,
  VariantButtonProps,
} from "../../../../types/products/variant";

const VariantButton = ({ open }: VariantButtonProps) => {
  return (
    <button className="border-b border-blue">
      {!open && (
        <Container>
          <Label>Show variants</Label>
          <Image src={DropDownIcon} alt="drop-icon"></Image>
        </Container>
      )}
      {!!open && (
        <Container>
          <Label>Hide variants</Label>
          <Image src={DropUpIcon} alt="drop-icon"></Image>
        </Container>
      )}
    </button>
  );
};

const Label = ({ children }: VariantButtonLabelProps) => (
  <p className="text-sm text-blue mr-1">{children}</p>
);

const Container = ({ children }: VariantButtonContainerProps) => (
  <div className="flex items-center">{children}</div>
);

export default VariantButton;
