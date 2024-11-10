import React, { PropsWithChildren, ReactElement } from "react";

type Prop = {
  btnClass?: string;
  btnText: string;
  iconElement: ReactElement;
  title: string;
  titleClass?: string;
  onClick?: () => void;
  className?: string;
  showBtn?: boolean;
};

const LayoutContainer: React.FC<PropsWithChildren<Prop>> = ({
  iconElement,
  title,
  titleClass,
  btnClass,
  btnText,
  onClick,
  children,
  className,
  showBtn,
}) => {
  return (
    <div className={`${className} rounded py-4 px-6 pb-12`}>
      <div className="flex justify-between items-center mb-6">
        <p
          className={`${titleClass} flex gap-2.5 font-semibold text-lg items-center`}
        >
          {iconElement}
          <span>{title}</span>
        </p>
        {showBtn ? (
          <button
            onClick={onClick}
            className={`${btnClass} py-3 text-sm font-semibold tracking-tighter px-10 rounded`}
          >
            {btnText}
          </button>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default LayoutContainer;
