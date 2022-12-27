import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";
import { Discount } from "../discount";

export interface ModalProps {
  children: ReactNode;
  closeModal: any;
  openModal?: Function;
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  title: string;
}

export interface ItemButtonProps {
  text?: string;
  icon?: string;
  item: Product | Variant;
  variant?: boolean;
  onSelect: Function;
}

export interface ImgProps {
  src: string;
  alt: string;
  size?: number;
}

export interface VariantButtonProps {
  variant: Variant;
  onSelect: Function;
}

export interface VariantContainer {
  variant?: boolean;
  children: ReactNode;
  className: string;
}

interface Image {
  id: number;
  product_id: number;
  src: string;
}

export interface Variant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  image?: Image;
  checked: boolean;
  inventory_quantity: number;
  discount: Discount;
}

export interface Product {
  id?: number;
  title: string;
  variants: Variant[];
  image?: Image;
  checked?: boolean;
  discount?: Discount;
  product_id?: number;
  discountEnabled?: boolean;
  inventory_quantity?: number;
  price?: string;
  maxDiscount?: number;
}

export interface ProductsComponent {
  products: Product[];
  incrementPage: MouseEventHandler;
  loading: boolean;
  setProducts: Function;
  setVariants: Function;
  paginationLoading: boolean;
  loadMore: boolean;
  search?: string;
}

export interface FooterProps {
  closeModal: MouseEventHandler;
  onAdd: MouseEventHandler;
}

export interface SearchProps {
  setSearch: Dispatch<SetStateAction<string>>;
}
