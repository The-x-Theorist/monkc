import { Product, Variant } from "../../types/modal";

export const setModal = (state: any, { payload }: { payload: boolean }) => {
  state.modal = payload;
  state.selectedProduct = {};
};

export const setProducts = (
  state: any,
  { payload }: { payload: Product[] }
) => {
  const newProducts = [...state.products, ...payload];
  if (state.selectedProduct.id) {
    const indexOfDeletedProduct = newProducts.findIndex((product) => {
      return product.id === state.selectedProduct.id;
    });
    newProducts.splice(indexOfDeletedProduct, 1);
  }
  state.products = newProducts;
  state.modal = false;
};

export const setSelectedProduct = (
  state: any,
  { payload }: { payload: Product }
) => {
  state.selectedProduct = { ...payload };
  state.selectedProduct.variants = [...state.selectedProduct.variants];
  state.modal = true;
};

export const deleteProduct = (
  state: any,
  { payload }: { payload: Product }
) => {
  state.products = state.products.filter(
    (product: Product) => product.id !== payload.id
  );
};

export const deleteVariant = (
  state: any,
  { payload }: { payload: Variant }
) => {
  const indexOfProduct = state.products.findIndex(
    (product: Product) => product.id === payload.product_id
  );
  const newProduct = { ...state.products[indexOfProduct] };
  newProduct.variants = newProduct.variants.filter(
    (variant: Variant) => variant.id !== payload.id
  );
  state.products[indexOfProduct] = newProduct;
};

export const addProductDiscount = (
  state: any,
  { payload }: { payload: Product }
) => {
  const newProducts = [...state.products];
  const indexOfProduct = newProducts.findIndex(
    (product: Product) => product.id === payload.id
  );
  newProducts[indexOfProduct].discount = {
    value: 0,
    discountType: "% Off",
  };
  newProducts[indexOfProduct].discountEnabled = true;
  let maxDiscountValue = 0;
  newProducts[indexOfProduct].variants.forEach((variant: Variant) => {
    if (maxDiscountValue < +variant.price) maxDiscountValue = +variant.price;
  });
  newProducts[indexOfProduct].maxDiscount = maxDiscountValue;
  state.products = newProducts;
};

export const setProductDiscountValue = (
  state: any,
  { payload }: { payload: { value: number; product_id: number } }
) => {
  const newProducts = [...state.products];
  const indexOfProduct = newProducts.findIndex(
    (product: Product) => product.id === payload.product_id
  );
  newProducts[indexOfProduct].discount.value = payload.value;
  state.products = newProducts;
};

export const setProductDiscountType = (
  state: any,
  { payload }: { payload: { type: string; product_id: number } }
) => {
  const newProducts = [...state.products];
  const indexOfProduct = newProducts.findIndex(
    (product: Product) => product.id === payload.product_id
  );
  if (!newProducts[indexOfProduct]?.discountEnabled) return;
  newProducts[indexOfProduct].discount.type = payload.type;
  state.products = newProducts;
};

export const setVariantDiscountValue = (
  state: any,
  { payload }: { payload: { value: number; product_id: number; id: number } }
) => {
  const newProducts = [...state.products];
  const indexOfProduct = newProducts.findIndex(
    (product: Product) => product.id === payload.product_id
  );
  const indexOfVariant = newProducts[indexOfProduct].variants.findIndex(
    (variant: Variant) => variant.id === payload.id
  );
  newProducts[indexOfProduct].variants[indexOfVariant].discount.value =
    payload.value;
  let maxDiscountValue =
    +newProducts[indexOfProduct].variants[indexOfVariant].price;
  newProducts[indexOfProduct].variants[indexOfVariant].maxDiscount =
    maxDiscountValue;
  state.products = newProducts;
};

export const setVariantDiscountType = (
  state: any,
  { payload }: { payload: { type: string; product_id: number; id: number } }
) => {
  const newProducts = [...state.products];
  const indexOfProduct = newProducts.findIndex(
    (product: Product) => product.id === payload.product_id
  );
  const indexOfVariant = newProducts[indexOfProduct].variants.findIndex(
    (variant: Variant) => variant.id === payload.id
  );
  newProducts[indexOfProduct].variants[indexOfVariant].discount.type =
    payload.type;
  state.products = newProducts;
};

export const reorderProducts = (
  state: any,
  { payload }: { payload: Product[] }
) => {
  state.products = payload;
};

export const reorderVariants = (
  state: any,
  { payload }: { payload: { variants: Variant[]; productId: number } }
) => {
  const productIndex = state.products.findIndex(
    (product: Product) => product.id === payload.productId
  );
  state.products[productIndex].variants = payload.variants;
};
