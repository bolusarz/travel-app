import React, { HTMLAttributes } from "react";

type Prop = {
  label: string;
  type: string;
  containerClass?: string;
  labelClass?: string;
} & HTMLAttributes<HTMLInputElement>;

const Input: React.FC<Prop> = ({
  containerClass,
  label,
  labelClass,
  ...inputProps
}) => {
  return (
    <div className={`${containerClass} `}>
      <label className={`${labelClass} `}>{label}</label>
      <input {...inputProps} />
    </div>
  );
};

export default Input;
