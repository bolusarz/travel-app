import React, { ReactElement } from "react";
import {
  AeroplaneIcon,
  CaretUpDownIcon,
  DocumentIcon,
  ExpressIcon,
  FirstAidIcon,
  HotelIcon,
  PackageIcon,
  StudentIcon,
  SuitcaseIcon,
} from "@/components";

type Prop = object;

const Sidebar: React.FC<Prop> = () => {
  return (
    <aside className="p-6 pb-[96px] h-fit bg-white w-[300px] flex gap-16 flex-col">
      <Menu />
      <AccountSwitcher />
    </aside>
  );
};

export default Sidebar;

const Menu: React.FC = () => (
  <div>
    <MenuItem
      title="Activities"
      icon={<ExpressIcon size={32} color="#344054" />}
    />
    <MenuItem title="Hotels" icon={<HotelIcon size={32} color="#344054" />} />
    <MenuItem
      title="Flights"
      icon={<AeroplaneIcon size={32} color="#344054" />}
    />
    <MenuItem title="Study" icon={<StudentIcon size={32} color="#344054" />} />
    <MenuItem title="Visa" icon={<DocumentIcon size={32} color="#344054" />} />
    <MenuItem
      title="Immigration"
      icon={<SuitcaseIcon size={32} color="#344054" />}
    />
    <MenuItem
      title="Medical"
      icon={<FirstAidIcon size={32} color="#344054" />}
    />
    <MenuItem
      title="Medical"
      icon={<FirstAidIcon size={32} color="#344054" />}
    />
    <MenuItem
      title="Vacation Packages"
      icon={<PackageIcon size={32} color="#344054" />}
    />
  </div>
);

const MenuItem: React.FC<{
  title: string;
  icon: ReactElement;
}> = ({ title, icon }) => (
  <a href="#" className="flex gap-2 items-center py-3 px-3.5">
    {icon}
    <span className="text-[#647995] font-medium tracking-tight">{title}</span>
  </a>
);

const AccountSwitcher: React.FC<{ className?: string }> = ({ className }) => (
  <button
    className={
      "flex items-center gap-2 py-[18px] px-3.5 pr-[22px] bg-[#F0F2F5] rounded " +
      className
    }
  >
    <p className="w-[50px] aspect-square bg-[#0D6EFD] rounded grid place-content-center text-white">
      Go
    </p>
    <p className="text-sm text-[#647995] font-medium tracking-tight">
      Personal Account
    </p>
    <CaretUpDownIcon color="#667185" className="ml-auto" size={24} />
  </button>
);
