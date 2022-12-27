import { DragControls } from "framer-motion";
import { Discount } from "../discount";
import { Product, Variant } from "../modal";

export interface ProductProps {
  id: number;
  title: string;
  discountEnabled: boolean;
  discount?: Discount;
  addDiscount?: (product: Product) => void;
  variants: Variant[];
  product: Product;
  canDelete: boolean;
  index: number;
  controls: any;
  dragControls: DragControls;
}

export type ProductsProps = ProductProps[];
