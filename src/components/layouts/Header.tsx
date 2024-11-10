import React, { ReactElement } from "react";
import {
  BasketIcon,
  BellIcon,
  ChecklistIcon,
  ChevronDownIcon,
  CoinsOnHandIcon,
  DashboardIcon,
  HomeIcon,
  Logo,
  PlusInSquareIcon,
  SearchIcon,
  WalletIcon,
} from "@/components";

import avatar from "/avatar.jpg";

type Prop = object;

const Header: React.FC<Prop> = () => {
  return (
    <header className="p-10 flex justify-between bg-white">
      <div className="flex gap-7 items-center">
        <Logo />
        <SearchBar value="" onChange={console.log} />
      </div>
      <Menu />
    </header>
  );
};

export default Header;

const SearchBar: React.FC<{
  value: string;
  onChange: (value) => void;
  className?: string;
}> = ({ value, onChange, className }) => {
  return (
    <div
      className={
        "bg-[#F0F2F5] rounded focus-within:outline outline-black/30 flex items-center py-4 px-3 gap-2 " +
        className
      }
    >
      <label htmlFor="input">
        <SearchIcon size={24} color="#667185" />
      </label>
      <input
        id="input"
        defaultValue={value}
        onChange={(evt) => onChange(evt.currentTarget.value)}
        className="focus:outline-0 focus-visible:outline-0 bg-transparent text-[#647995]"
        placeholder="Search"
      />
    </div>
  );
};

const Menu: React.FC = () => (
  <nav className="flex gap-6 items-center">
    <MenuItem
      title="Home"
      icon={<HomeIcon size={32} color="#667185" />}
      active={false}
    />
    <MenuItem
      title="Dashboard"
      icon={<DashboardIcon size={32} color="#667185" />}
      active={false}
    />
    <MenuItem
      title="Wallet"
      icon={<WalletIcon size={32} color="#667185" />}
      active={false}
    />
    <MenuItem
      title="Plan a trip"
      icon={<ChecklistIcon size={32} color="#344054" />}
      active
    />
    <MenuItem
      title="Commission for life"
      icon={<CoinsOnHandIcon size={32} color="#344054" />}
      active={false}
    />
    <div className="w-[1px] h-full bg-[#98A2B3] mx-2"></div>
    <button className="bg-[#0D6EFD] rounded text-white text-sm leading-[22px] py-2 px-4 mr-2">
      Subscribe
    </button>
    <MenuItem
      title="Notification"
      icon={<BellIcon size={32} color="#344054" />}
      active={false}
    />
    <MenuItem
      title="Carts"
      icon={<BasketIcon size={32} color="#344054" />}
      active={false}
    />
    <MenuItem
      title="Create"
      icon={<PlusInSquareIcon size={32} color="#344054" />}
      active={false}
    />
    <Avatar />
  </nav>
);

const MenuItem: React.FC<{
  title: string;
  icon: ReactElement;
  active: boolean;
}> = ({ title, active, icon }) => (
  <a href="#" className="flex flex-col text-sm gap-2 items-center">
    {icon}
    <span
      className={
        active
          ? "text-[#1D2433] font-medium tracking-tight "
          : "text-[#647995] font-medium tracking-tight "
      }
    >
      {title}
    </span>
  </a>
);

const Avatar: React.FC = () => (
  <div className="flex items-center gap-4">
    <img src={avatar} alt="Avatar" />
    <ChevronDownIcon size={24} color="#667185" />
  </div>
);
