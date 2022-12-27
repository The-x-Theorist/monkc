import { Disclosure, Transition } from "@headlessui/react";
import DragButton from "../../../atoms/body/drag-button";
import Paragraph from "../../../atoms/paragraph";
import ProductButton from "../../../atoms/body/product-button";
import Discount from "./discount";
import { ProductProps } from "../../../../types/products";
import VariantButton from "../../../atoms/body/variant-button";
import CloseButton from "../../../atoms/body/close-button";
import Variant from "./variant";
import { useDispatch } from "react-redux";
import { AppSliceActions } from "../../../../store/store";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { Variant as VariantType } from "../../../../types/modal";

const Product = ({
  addDiscount,
  product,
  canDelete,
  index,
  dragControls,
}: ProductProps) => {
  const { title, id, discountEnabled, variants } = product;
  const showDisclosureButton =
    variants.filter((variant) => variant.checked).length > 1;

  const dispatch = useDispatch();

  return (
    <Disclosure defaultOpen={!showDisclosureButton}>
      {({ open }) => (
        <div className="w-full bg-grey z-30">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
              <DragButton
                onDrag={(e: MouseEvent) =>
                  dragControls.start(e, {
                    snapToCursor: true,
                  })
                }
              ></DragButton>
              <div className="mx-4">
                <Paragraph>{index + 1}.</Paragraph>
              </div>
              <ProductButton product={product} title={title}></ProductButton>
            </div>
            {/* @ts-ignore */}
            <Discount
              discountEnabled={discountEnabled}
              addDiscount={() => addDiscount && addDiscount(product)}
              //@ts-ignore
              productId={product.id}
              maxDiscount={product.maxDiscount ? product.maxDiscount : 0}
              value={product.discount ? product.discount.value : 0}
              {...product.discount}
            ></Discount>
            {canDelete && (
              <CloseButton
                onClick={() => dispatch(AppSliceActions.deleteProduct(product))}
              ></CloseButton>
            )}
          </div>
          {showDisclosureButton && (
            <div className="w-full flex justify-end my-2">
              <Disclosure.Button className="w-auto">
                <VariantButton open={open}></VariantButton>
              </Disclosure.Button>
            </div>
          )}
          {!!variants.length && (
            <div className="my-4 pb-2 border-b border-grey-200 w-full">
              <Transition
                show={open}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Disclosure.Panel className="mb-2 w-full">
                  {variants.map((variant, i) =>
                    variant.checked ? (
                      <Variant
                        canDelete={!showDisclosureButton}
                        variant={variant}
                        productId={product.id ?? 0}
                        maxDiscount={+variant.price}
                        key={i}
                      ></Variant>
                    ) : null
                  )}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </div>
      )}
    </Disclosure>
  );
};

export default Product;
