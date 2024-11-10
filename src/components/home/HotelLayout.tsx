import React, { useState } from "react";
import {
  EmptySection,
  HotelIcon,
  HotelItem,
  LayoutContainer,
  Modal,
  WarehouseIcon,
  HotelForm,
} from "@/components";
import { useAppContext } from "@/hooks";

type Prop = object;

const HotelLayout: React.FC<Prop> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { hotels, removeHotel, addHotel } = useAppContext();

  return (
    <LayoutContainer
      btnText="Add Hotels"
      iconElement={<WarehouseIcon size={24} color="#fff" />}
      title="Hotels"
      titleClass="text-white"
      className="bg-[#344054]"
      showBtn={!!hotels?.length}
      btnClass="text-[#1D2433] bg-white"
    >
      {!hotels?.length ? (
        <EmptySection
          btnText="Add Hotel"
          onClick={() => setIsVisible(true)}
          iconElement={<HotelIcon size={80} className="text-black/50" />}
        />
      ) : (
        <div className="flex flex-col gap-6">
          {hotels.map((hotel) => (
            <HotelItem
              key={hotel.hotel_id}
              hotel={hotel}
              onRemove={() => {
                removeHotel(hotel.hotel_id);
              }}
            />
          ))}
        </div>
      )}
      <Modal
        open={isVisible}
        titleContent={
          <h3 className="text-xl font-semibold px-6">Add Hotels</h3>
        }
        onClose={() => setIsVisible(false)}
        className="!max-w-2xl !px-0"
      >
        <HotelForm
          addHotel={(hotel) => {
            addHotel(hotel);
            setIsVisible(false);
          }}
        />
      </Modal>
    </LayoutContainer>
  );
};

export default HotelLayout;
