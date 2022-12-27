import { Disclosure, RadioGroup } from "@headlessui/react";
import { UIEventHandler, useState } from "react";
import { Product, ProductsComponent } from "../../../../types/modal";
import ProductButton from "../product-button";
import VariantButton from "./variant-component";
import Spinner from "../../../atoms/spinner";

const ProductComponent = ({
  products,
  incrementPage,
  loading,
  setProducts,
  setVariants,
  paginationLoading,
  loadMore,
}: ProductsComponent) => {
  const handleScroll = (e: UIEventHandler<HTMLDivElement> | any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      incrementPage(e);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full rounded-2xl bg-white">
        <RadioGroup className="max-w-full">
          <div
            className="w-full overflow-y-auto"
            style={{
              height: "524px",
            }}
            onScroll={handleScroll}
          >
            {loading && (
              <div className="w-full h-full flex justify-center items-center">
                <Spinner></Spinner>
              </div>
            )}
            {!loading &&
              products?.length &&
              products.map((product: Product, i: number) => (
                <Disclosure defaultOpen={!!product.checked} key={i}>
                  {({ open, close }) => {
                    if (!product.checked && open) close();
                    return (
                      <>
                        <div className="flex flex-col justify-center">
                          <ProductButton
                            onSelect={setProducts}
                            product={product}
                          ></ProductButton>
                          <Disclosure.Panel className="text-sm text-gray-500">
                            <RadioGroup>
                              {product.variants?.map((variant, i) => (
                                <VariantButton
                                  onSelect={setVariants}
                                  variant={variant}
                                  key={i}
                                ></VariantButton>
                              ))}
                            </RadioGroup>
                          </Disclosure.Panel>
                        </div>
                      </>
                    );
                  }}
                </Disclosure>
              ))}
            {!!paginationLoading && (
              <div className="w-full flex justify-center py-4">
                <Spinner></Spinner>
              </div>
            )}
            {loadMore && !paginationLoading && (
              <div className="w-full flex justify-center items-center mt-5">
                <button
                  onClick={incrementPage}
                  className="text-base font-semibold text-primary"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default ProductComponent;
