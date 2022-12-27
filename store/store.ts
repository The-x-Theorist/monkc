import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  addProductDiscount,
  deleteProduct,
  deleteVariant,
  reorderProducts,
  reorderVariants,
  setModal,
  setProductDiscountType,
  setProductDiscountValue,
  setProducts,
  setSelectedProduct,
  setVariantDiscountType,
  setVariantDiscountValue,
} from "./reducers";

// create a slice
export const AppSlice = createSlice({
  name: "App",
  initialState: {
    modal: false,
    selectedProduct: {},
    products: [],
  },
  reducers: {
    setModal,
    setSelectedProduct,
    setProducts,
    deleteProduct,
    deleteVariant,
    addProductDiscount,
    setProductDiscountValue,
    setProductDiscountType,
    setVariantDiscountValue,
    setVariantDiscountType,
    reorderProducts,
    reorderVariants,
  },
});

// config the store
const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
  },
});

// export default the store
export default store;

// export the action
export const AppSliceActions = AppSlice.actions;
