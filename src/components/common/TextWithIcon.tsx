import React, { PropsWithChildren, ReactElement } from "react";

type Prop = {
  className?: string;
  iconElement: ReactElement;
};

const TextWithIcon: React.FC<PropsWithChildren<Prop>> = ({
  iconElement,
  children,
  className,
}) => (
  <span className={`${className} flex items-center gap-1`}>
    {iconElement} {children}
  </span>
);

export default TextWithIcon;
