import React, { ReactElement } from "react";

type Prop = {
  btnText: string;
  onClick: () => void;
  iconElement: ReactElement;
};

const EmptySection: React.FC<Prop> = ({ onClick, iconElement, btnText }) => {
  return (
    <div className="rounded bg-white h-[300px] grid text-center place-content-center">
      <span className="grid place-content-center mb-5">{iconElement}</span>
      <p className="mb-2 font-medium">No request Yet</p>
      <button
        className="w-[200px] bg-[#0D6EFD] rounded text-white py-3"
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
};

export default EmptySection;
