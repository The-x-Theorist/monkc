import { useState } from "react";
import DiscountInput from "../../../../atoms/body/discount-input";
import DiscountTypeMenu from "../../../../atoms/body/discount-type-menu";
import { Item as DiscountTypeProps } from "../../../../../types/discount";
import { DiscountProps } from "../../../../../types/discount";
import DiscountButton from "../../../../atoms/body/discount-button";
import { useDispatch } from "react-redux";
import { AppSliceActions } from "../../../../../store/store";
import { useEffect } from "react";

const Discount = ({
  value,
  discountEnabled,
  productId,
  addDiscount,
  type,
  marginX,
  rounded = false,
  maxDiscount,
  variantId,
}: DiscountProps) => {
  const [activeDiscountType, setActiveDiscountType] =
    useState<DiscountTypeProps>({
      id: 1,
      text: type ?? "% Off",
    });

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && discountEnabled)
      dispatch(
        AppSliceActions.setProductDiscountType({
          type: activeDiscountType.text,
          product_id: productId,
        })
      );
    if (variantId && productId)
      dispatch(
        AppSliceActions.setVariantDiscountType({
          type: activeDiscountType.text,
          product_id: productId,
          id: variantId,
        })
      );
  }, [activeDiscountType]);

  return (
    <div
      className="ml-6 w-full"
      style={{
        marginLeft: marginX ?? "",
      }}
    >
      {!!discountEnabled && (
        <div className="flex items-center">
          <DiscountInput
            onChange={(number: number) =>
              productId
                ? variantId
                  ? dispatch(
                      AppSliceActions.setVariantDiscountValue({
                        product_id: productId,
                        value: number,
                        id: variantId,
                      })
                    )
                  : dispatch(
                      AppSliceActions.setProductDiscountValue({
                        product_id: productId,
                        value: number,
                      })
                    )
                : null
            }
            rounded={rounded}
            value={value ?? 0}
            discountType={activeDiscountType.text}
            maxDiscount={maxDiscount}
          ></DiscountInput>
          <div className="ml-4 relative">
            <DiscountTypeMenu
              activeDiscountType={activeDiscountType}
              setActiveDiscountType={setActiveDiscountType}
              rounded={rounded}
            ></DiscountTypeMenu>
          </div>
        </div>
      )}
      {!discountEnabled && (
        <DiscountButton
          onClick={() => addDiscount && addDiscount()}
        ></DiscountButton>
      )}
    </div>
  );
};

export default Discount;
