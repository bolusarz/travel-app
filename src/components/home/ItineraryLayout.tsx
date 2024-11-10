import React from "react";
import { FlightList } from "@/components";

type Prop = object;

const ItineraryLayout: React.FC<Prop> = () => {
  return (
    <section className="mt-[84px]">
      <h6 className="text-xl font-semibold tracking-tight text-[#1D2433] mb-0.5">
        Trip itineraries
      </h6>
      <p className="text-[#647995] text-sm font-medium tracking-tight mb-7">
        Your trip itineraries are placed here
      </p>
      <FlightList />
    </section>
  );
};

export default ItineraryLayout;
