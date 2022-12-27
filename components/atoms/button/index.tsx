import { ReactNode } from "react";
import { ButtonProps } from "../../../types/button";

const Button = ({ children, rounded, w }: ButtonProps) => (
  <div
    style={{
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: rounded === "full" ? "5rem" : "",
    }}
    className={`flex py-2 px-4 items-center border border-grey-light bg-white ${
      w === "long" ? "w-72" : "w-32"
    } truncate text-left flex justify-between`}
  >
    {children}
  </div>
);

export default Button;
