import React, { PropsWithChildren } from "react";
import { CloseIcon } from "@/components";

type Prop = {
  onClick?: () => void;
  className?: string;
};

const Card: React.FC<PropsWithChildren<Prop>> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <div className={`${className} rounded flex`}>
      {children}
      <button
        className="bg-[#FBEAE9] grid place-content-center px-[11px]"
        onClick={onClick}
      >
        <CloseIcon size={24} color="#9E0A05" />
      </button>
    </div>
  );
};

export default Card;
