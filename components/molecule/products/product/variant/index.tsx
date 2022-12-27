import { useDispatch } from "react-redux";
import { AppSliceActions } from "../../../../../store/store";
import { Variant } from "../../../../../types/modal";
import CloseButton from "../../../../atoms/body/close-button";
import DragButton from "../../../../atoms/body/drag-button";
import VariantProductButton from "../../../../atoms/body/variant-product-button";
import Discount from "../discount";

const Variant = ({
  variant,
  canDelete,
  productId,
  maxDiscount,
}: {
  variant: Variant;
  canDelete: boolean;
  productId: number;
  maxDiscount: number;
}) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-between pl-32 mb-4">
      <DragButton height={32}></DragButton>
      <div className="mx-4">
        <VariantProductButton {...variant}></VariantProductButton>
      </div>
      <Discount
        value={variant?.discount?.value}
        productId={productId}
        variantId={variant.id}
        type={variant.discount?.text ?? ""}
        discountEnabled
        marginX={canDelete ? "" : "4px"}
        rounded
        maxDiscount={maxDiscount}
      ></Discount>
      {!canDelete && (
        <CloseButton
          onClick={() => dispatch(AppSliceActions.deleteVariant(variant))}
          size={24}
        ></CloseButton>
      )}
    </div>
  );
};

export default Variant;
