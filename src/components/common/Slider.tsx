import React, { useState } from "react";
import { CaretCircleLeftIcon, CaretCircleRightIcon } from "@/components";

type Prop = {
  images: string[];
  className?: string;
};

const Slider: React.FC<Prop> = ({ images, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((val) => (val === 0 ? images.length - 1 : val - 1));
  };

  const next = () => {
    setActiveIndex((val) => (val === images.length - 1 ? 0 : val + 1));
  };

  return (
    <div className={`${className} grid relative`}>
      {images.map((image, index) => (
        <img
          className={`${
            activeIndex === index ? "opacity-100" : "opacity-0"
          } transition-opacity absolute inset-0 object-cover`}
          src={image}
          alt="Slider Image"
          key={image}
        />
      ))}
      <button
        className="absolute top-1/2 -translate-y-1/2 left-3"
        onClick={prev}
      >
        <CaretCircleLeftIcon size={32} color="#F9FAFB" />
      </button>

      <button
        className="absolute top-1/2 -translate-y-1/2 right-3"
        onClick={next}
      >
        <CaretCircleRightIcon size={32} color="#F9FAFB" />
      </button>
    </div>
  );
};

export default Slider;
