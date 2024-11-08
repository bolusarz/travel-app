import React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarBlankIcon,
  DotsThreeIcon,
  GearIcon,
  UserPlusIcon,
} from "@/components";
import banner from "/banner.png";
import avatar from "/avatar2.png";

type Prop = object;

const TripDetailsLayout: React.FC<Prop> = () => {
  return (
    <section>
      <header className="relative p-6 rounded h-[200px] overflow-clip mb-5">
        <img
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <button className="p-3 bg-white/20 relative grid place-content-center">
          <ArrowLeftIcon size={24} color="#344054" />
        </button>
      </header>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <TripDate />
          <TripInfo />
        </div>
        <Menu />
      </div>
      <Options />
    </section>
  );
};

export default TripDetailsLayout;

const CardDetails: React.FC<{
  title: string;
  subtitle: string;
  onClick?: () => void;
  textColor: string;
  btnClass: string;
  btnText: string;
  bgColor: string;
}> = ({ onClick, btnClass, textColor, title, subtitle, bgColor, btnText }) => (
  <div
    style={{ color: textColor, backgroundColor: bgColor }}
    className="rounded py-4 px-3.5 max-w-[270px]"
  >
    <p className="font-semibold tracking-tighter mb-2">{title}</p>
    <p className="text-sm tracking-tighter mb-8">{subtitle}</p>

    <button onClick={onClick} className={`${btnClass} w-full py-3 rounded`}>
      {btnText}
    </button>
  </div>
);

const TripDate: React.FC = () => (
  <span className="text-[#7A4504] flex w-fit items-center py-1 px-2 bg-[#FEF4E6] gap-1 text-sm font-medium tracking-tighter">
    <CalendarBlankIcon size={16} />
    <span>21 March 2024</span>
    <ArrowRightIcon size={16} />
    <span>21 April 2024</span>
  </span>
);

const TripInfo: React.FC = () => (
  <>
    <p className="font-semibold text-2xl tracking-tight">Bahamas Family Trip</p>
    <p className="text-[#676E7E] tracking-tighter font-medium flex gap-1">
      <span>New York, United States of America</span>
      <span className="text-[#D0D5DD]">|</span>
      <span>Solo Trip</span>
    </p>
  </>
);

const Options: React.FC = () => (
  <div className="flex gap-1">
    <CardDetails
      bgColor="#000031"
      title="Activites"
      subtitle="Build, personalize, and optimize your itineraries with our trip planner."
      btnClass="bg-[#0D6EFD] text-white"
      btnText="Add Activities"
      textColor="white"
    />
    <CardDetails
      bgColor="#E7F0FF"
      title="Hotels"
      subtitle="Build, personalize, and optimize your itineraries with our trip planner."
      btnClass="bg-[#0D6EFD] text-white"
      btnText="Add Hotels"
      textColor="#1D2433"
    />
    <CardDetails
      bgColor="#0D6EFD"
      title="Flights"
      subtitle="Build, personalize, and optimize your itineraries with our trip planner."
      btnClass="bg-white text-[#0D6EFD]"
      btnText="Add Flights"
      textColor="white"
    />
  </div>
);

const Menu: React.FC = () => (
  <section className="flex flex-col gap-8 items-center">
    <div className="flex gap-2 items-center">
      <button className="w-[160px] py-3.5 bg-[#E7F0FF] rounded grid place-content-center">
        <UserPlusIcon size={20} color="#0D6EFD" />
      </button>
      <button>
        <DotsThreeIcon size={32} color="#344054" />
      </button>
    </div>
    <button className="flex items-center">
      <img src={avatar} alt="Avatar" />
      <span className="bg-[#E7F0FF] w-[31px] rounded-lg h-[2px] -mr-0.5"></span>
      <span className="p-3 rounded-full border-2 border-[#E7F0FF]">
        <GearIcon size={16} color="#344054" />
      </span>
    </button>
  </section>
);
