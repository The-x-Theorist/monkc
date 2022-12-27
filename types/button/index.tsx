import { MouseEventHandler, ReactNode } from "react";
import { Product } from "../modal";

export interface CTAProps {
  children: ReactNode;
  onClick: MouseEventHandler;
  reverse?: boolean;
}

export interface ProductButton {
  title: string;
  edit?: boolean;
  rounded?: string;
  w?: string;
  product?: Product;
}

export interface ButtonProps {
  children: ReactNode;
  rounded?: string;
  w?: string;
}
