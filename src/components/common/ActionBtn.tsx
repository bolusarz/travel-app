import React, { PropsWithChildren } from "react";

type Prop = {
  className?: string;
};

const ActionBtn: React.FC<PropsWithChildren<Prop>> = ({
  children,
  className,
}) => (
  <button
    className={`${className} border-0 font-medium text-lg text-[#0D6EFD] tracking-tight`}
  >
    {children}
  </button>
);

export default ActionBtn;
