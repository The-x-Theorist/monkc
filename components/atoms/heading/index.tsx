import React, { ReactNode } from "react";

interface HeadingProps {
  children: any;
  className?: any;
}

const Heading = ({ children }: HeadingProps) => {
  return <div className="text-black">{children}</div>;
};

export const H1 = ({ children, ...otherProps }: HeadingProps) => (
  <Heading>
    <h1 {...otherProps}>{children}</h1>
  </Heading>
);

export const H2 = ({ children, ...otherProps }: HeadingProps) => (
  <Heading>
    <h2 {...otherProps}>{children}</h2>
  </Heading>
);

export const H3 = ({ children, ...otherProps }: HeadingProps) => (
  <Heading>
    <h3 {...otherProps}>{children}</h3>
  </Heading>
);

export const H4 = ({ children, ...otherProps }: HeadingProps) => (
  <Heading>
    <h4 {...otherProps}>{children}</h4>
  </Heading>
);

export const H5 = ({ children, ...otherProps }: HeadingProps) => (
  <Heading>
    <h5 {...otherProps}>{children}</h5>
  </Heading>
);

export const H6 = ({ children, ...otherProps }: HeadingProps) => (
  <Heading>
    <h6 {...otherProps}>{children}</h6>
  </Heading>
);
