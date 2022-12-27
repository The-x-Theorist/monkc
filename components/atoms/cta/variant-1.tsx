import { CTAProps } from "../../../types/button";

const CTA1 = ({ children, onClick, reverse, ...otherProps }: CTAProps) => {
  return (
    <button
      className={
        !reverse
          ? "py-2 px-5 bg-primary text-sm font-semibold rounded border border-primary hover:bg-white hover:text-primary transition w-full"
          : "py-2 px-10 text-base font-semibold rounded border-2 border-primary text-primary hover:bg-primary hover:text-white transition"
      }
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CTA1;
