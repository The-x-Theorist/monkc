import { Product } from "../modal";

export interface AppState {
  modal: boolean;
  products: Product[] | [];
  selectedProduct: Product;
}
