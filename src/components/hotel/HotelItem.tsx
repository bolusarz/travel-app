import React from "react";
import {
  ActionBtn,
  BedIcon,
  CalendarBlankIcon,
  Card,
  MapPinIcon,
  Slider,
  StarIcon,
  SwimmingPoolIcon,
  TextWithIcon,
  WineIcon,
} from "@/components";
import { FetchHotelDetailsParams, HotelDetails } from "@/services";
import { useFetchHotel } from "@/hooks";

type Prop = {
  hotel: FetchHotelDetailsParams;
  onRemove: () => void;
};

const images = [
  "https://q-xx.bstatic.com/xdata/images/xphoto/300x320/142009071.jpg?k=30f6c0464aba39762aeafd2a63bb5727fdc19bcbb7081f0abf00d9dd4b107542&o=",
];

const HotelItem: React.FC<Prop> = (props) => {
  const { hotel, isLoading } = useFetchHotel(props.hotel);

  return (
    <Card onClick={props.onRemove}>
      <div className="p-6 pr-0 bg-white flex grow">
        {isLoading ? "Fetching...." : null}
        {hotel ? (
          <>
            <Slider
              images={images}
              className="shrink-0 w-[232px] h-full rounded overflow-clip"
            />
            <div className="flex items-center grow">
              <div className="grow flex flex-col gap-4">
                <HotelInfo hotel={hotel} className="pl-4 pr-10" />
                <HotelFacilities hotel={hotel} className="py-3.5 pl-4 pr-10" />
                <HotelActions hotel={hotel} className="pl-4 pr-10" />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </Card>
  );
};

export default HotelItem;

const HotelInfo: React.FC<{ className?: string; hotel: HotelDetails }> = ({
  className,
  hotel,
}) => {
  return (
    <div className={`${className} flex justify-between`}>
      <div>
        <h6 className="font-semibold text-xl tracking-tight mb-0.5">
          {hotel.hotel_name}
        </h6>
        <p className="font-medium text-[#1D2433] max-w-[47ch] mb-2 tracking-tight">
          {hotel.address}
        </p>
        <div className="font-medium text-[#676E7E] flex gap-3.5 items-center tracking-tight">
          <TextWithIcon
            className="text-[#0D6EFD]"
            iconElement={<MapPinIcon color="#0D6EFD" size={18} />}
          >
            Show in map
          </TextWithIcon>
          <TextWithIcon iconElement={<StarIcon color="#F4B93E" size={18} />}>
            8.5 (436)
          </TextWithIcon>
          <TextWithIcon iconElement={<BedIcon color="#344054" size={18} />}>
            King size room
          </TextWithIcon>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <p className="text-[#1D2433] !text-[28px] text-3xl font-semibold tracking-tight">
          {hotel.product_price_breakdown.gross_amount.amount_unrounded}
        </p>
        <p className="font-medium text-[#1D2433] max-w-[47ch] tracking-tight">
          Total Price:{" "}
          {hotel.product_price_breakdown.gross_amount.amount_unrounded}
        </p>
        <p className="font-medium text-[#1D2433] max-w-[47ch] tracking-tight">
          1 room x 10 nights incl. taxes
        </p>
      </div>
    </div>
  );
};

const HotelFacilities: React.FC<{
  className?: string;
  hotel: HotelDetails;
}> = ({ className, hotel }) => {
  return (
    <div
      className={`${className} border-y border-[#E4E7EC] text-[#647995] text-lg flex items-center gap-3 font-medium tracking-tight`}
    >
      <p>Facilities:</p>
      <TextWithIcon
        iconElement={<SwimmingPoolIcon size={20} color="#475367" />}
      >
        Pool
      </TextWithIcon>
      <TextWithIcon iconElement={<WineIcon size={20} color="#475367" />}>
        Bar
      </TextWithIcon>
      <TextWithIcon
        className="ml-auto"
        iconElement={<CalendarBlankIcon size={20} color="#475367" />}
      >
        Check In: {hotel.arrival_date}
      </TextWithIcon>
      <TextWithIcon
        iconElement={<CalendarBlankIcon size={20} color="#475367" />}
      >
        Check Out: {hotel.departure_date}
      </TextWithIcon>
    </div>
  );
};

const HotelActions: React.FC<{ className?: string; hotel: HotelDetails }> = ({
  className,
}) => {
  return (
    <div className={`${className} flex gap-8`}>
      <ActionBtn>Hotel Details</ActionBtn>
      <ActionBtn>Price Details</ActionBtn>
      <ActionBtn className="ml-auto">Edit Details</ActionBtn>
    </div>
  );
};
