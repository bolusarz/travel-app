import React from "react";
import logo from "/logo.png";

type Prop = object;

const Logo: React.FC<Prop> = () => {
  return (
    <div className="grid w-fit place-content-center bg-[#0A6DE4] p-2 rounded-[0.25rem]">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
