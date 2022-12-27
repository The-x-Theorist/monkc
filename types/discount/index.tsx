import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface Item {
  id: number;
  text: string;
}

type SetDiscountType = Dispatch<SetStateAction<Item>>;

export interface MenuProps {
  items: Item[];
  activeItem: Item;
  setActiveItem: SetDiscountType;
  rounded?: boolean;
}

export interface DiscountTypeMenuProps {
  activeDiscountType: Item;
  setActiveDiscountType: SetDiscountType;
  rounded?: boolean;
}

export interface Discount {
  productId: number;
  value: number;
  type: string;
  text?: string;
}

export interface DiscountButtonProps {
  onClick: MouseEventHandler;
}

export interface DiscountProps {
  productId?: number;
  value: any;
  addDiscount?: Function;
  discountEnabled?: boolean;
  type: string;
  marginX?: string;
  rounded?: boolean;
  maxDiscount: number;
  variantId?: number;
}

export interface DiscountInput {
  value: number;
  onChange: Function;
  rounded?: boolean;
  text?: string;
  discountType: string;
  maxDiscount: number;
}
