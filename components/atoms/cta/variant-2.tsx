import { CTAProps } from "../../../types/button";

const CTA2 = ({ children, onClick, reverse, ...otherProps }: CTAProps) => {
  return (
    <button
      className={
        !reverse
          ? "py-2 px-5 text-sm font-semibold rounded border bg-white border-grey-200 text-grey-300 hover:bg-grey-200 hover:text-white transition"
          : "py-2 px-10 text-base font-semibold rounded border-2 border-primary text-primary hover:bg-primary hover:text-white transition"
      }
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CTA2;
