import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph = ({ children, ...otherProps }: ParagraphProps) => (
  <p className="text-sm text-black truncate" {...otherProps}>
    {children}
  </p>
);

export default Paragraph;
