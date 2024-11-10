import React, { useState } from "react";
import {
  ActionBtn,
  AirplaneInFlightIcon,
  AirplaneLandingIcon,
  AirplaneTakeoffIcon,
  Card,
  EmptySection,
  FilmSlateIcon,
  FlightForm,
  ForkKnifeIcon,
  LayoutContainer,
  Modal,
  SuitcaseIcon,
  TextWithIcon,
  USBIcon,
} from "@/components";
import { useAppContext, useFetchFlight } from "@/hooks";
import dayjs from "dayjs";
import { formatCurrency } from "@/util";

type Prop = object;

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const hoursDisplay = hours > 0 ? `${hours}hr` : "";
  const minutesDisplay = minutes > 0 ? `${minutes}min` : "";

  return `${hoursDisplay} ${minutesDisplay}`.trim();
};

const FlightList: React.FC<Prop> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { flights, removeFlight, addFlight } = useAppContext();
  return (
    <LayoutContainer
      btnText="Add Flights"
      iconElement={<AirplaneInFlightIcon size={24} color="#344054" />}
      title="Flights"
      titleClass="text-[#1D2433]"
      className="bg-[#F0F2F5]"
      btnClass="text-[#0D6EFD] bg-white"
      showBtn={!!flights?.length}
      onClick={() => setIsVisible(true)}
    >
      <div className="flex flex-col gap-6">
        {flights.map((flightId) => (
          <FlightItem
            key={flightId}
            flightId={flightId}
            onRemove={() => removeFlight(flightId)}
          />
        ))}
        {!flights?.length ? (
          <EmptySection
            btnText="Add Flight"
            onClick={() => setIsVisible(true)}
            iconElement={
              <AirplaneInFlightIcon size={80} className="text-black/50" />
            }
          />
        ) : null}
      </div>
      <Modal
        open={isVisible}
        titleContent={
          <h3 className="text-xl font-semibold px-6">Add Flights</h3>
        }
        onClose={() => setIsVisible(false)}
        className="!max-w-2xl !px-0"
      >
        <FlightForm
          addFlight={(token) => {
            addFlight(token);
            setIsVisible(false);
          }}
        />
      </Modal>
    </LayoutContainer>
  );
};

export default FlightList;

const FlightItem: React.FC<{ onRemove: () => void; flightId: string }> = ({
  onRemove,
  flightId,
}) => {
  const { flight, isLoading } = useFetchFlight(flightId);

  const FlightInfo: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <div className={`${className} flex justify-between items-center`}>
        <AirlineInfo />
        <ArrivalDepartureInfo />
        <p className="text-[#1D2433] !text-[28px] text-3xl font-semibold tracking-tight">
          {formatCurrency(
            flight?.priceBreakdown.total.units || 0,
            flight?.priceBreakdown.total.currencyCode || "",
          )}
        </p>
      </div>
    );
  };

  const AirlineInfo: React.FC = () => {
    return (
      <div className="flex gap-5 items-center">
        <img
          src={flight?.segments[0].legs[0].carriersData[0].logo}
          alt="Airline Logo"
          width={24}
          height={24}
        />
        <div className="flex flex-col gap-1">
          <p className="text-[#1D2433] font-semibold text-xl tracking-tight">
            {flight?.segments[0].legs[0].carriersData[0].name}
          </p>
          <p className="flex items-center">
            <span className="text-[#676E7E] tracking-tighter font-medium ">
              {flight?.segments[0].legs[0].carriersData[0].code}-$
              {flight?.segments[0].legs[0].flightInfo.flightNumber}
            </span>
            <span className="p-2 grid place-content-center">
              <span className="w-1 rounded-full aspect-square bg-[#667185]"></span>
            </span>
            <span className="px-2 py-1 bg-[#0A369D] capitalize rounded text-white">
              {flight?.segments[0].legs[0].cabinClass}
            </span>
          </p>
        </div>
      </div>
    );
  };

  const ArrivalDepartureInfo: React.FC = () => {
    return (
      <div className="flex gap-10 items-center">
        <Time date={flight?.segments[0].departureTime || ""} />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between text-[#475367] tracking-tighter font-medium">
            <AirplaneTakeoffIcon size={20} />
            <p>Duration: {formatTime(flight?.segments[0].totalTime || 0)}</p>
            <AirplaneLandingIcon size={20} />
          </div>
          <div className="bg-[#E7F0FF] rounded-lg w-[387px] h-2 grid place-content-center">
            <span className="bg-[#0D6EFD] rounded-lg h-2 w-[130px]"></span>
          </div>
          <div className="flex justify-between text-[#475367] tracking-tighter font-medium">
            <p className="text-[#1D2433]">
              {flight?.segments[0].departureAirport.city}
            </p>
            <p>Direct</p>
            <p className="text-[#1D2433]">
              {flight?.segments[0].arrivalAirport.city}
            </p>
          </div>
        </div>

        <Time date={flight?.segments[0].arrivalTime || ""} />
      </div>
    );
  };

  const Time: React.FC<{ date: string }> = ({ date }) => (
    <p className="flex flex-col gap-0.5 justify-end">
      <span className="font-semibold text-2xl text-[#1D2433] tracking-tight">
        {dayjs(date).format("HH:mm")}
      </span>
      <span className="text-[#676E7E] text-sm font-medium tracking-tighter">
        {dayjs(date).format("ddd, DD MMM")}
      </span>
    </p>
  );

  const FlightFacilities: React.FC<{ className?: string }> = ({
    className,
  }) => {
    return (
      <div
        className={`${className} border-y border-[#E4E7EC] text-[#647995] text-lg flex items-center gap-3 font-medium tracking-tight`}
      >
        <p>Facilities:</p>
        <TextWithIcon
          className="mr-1"
          iconElement={<SuitcaseIcon size={20} color="#475367" />}
        >
          Baggage: 20kg, Cabin Baggage: 8kg
        </TextWithIcon>
        <TextWithIcon
          className="mr-1"
          iconElement={<FilmSlateIcon size={20} color="#475367" />}
        >
          In flight entertainment
        </TextWithIcon>
        <TextWithIcon
          className="mr-1"
          iconElement={<ForkKnifeIcon size={20} color="#475367" />}
        >
          In flight meal
        </TextWithIcon>
        <TextWithIcon
          className="mr-1"
          iconElement={<USBIcon size={20} color="#475367" />}
        >
          USB Port
        </TextWithIcon>
      </div>
    );
  };

  return (
    <Card className="bg-white" onClick={onRemove}>
      <div className="grow">
        {isLoading ? "Fetching details..." : null}
        {flight ? (
          <>
            <FlightInfo className="p-6 pr-12" />
            <FlightFacilities className="p-6" />
            <FlightActions className="p-6" />
          </>
        ) : null}
      </div>
    </Card>
  );
};
const FlightActions: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} flex gap-8`}>
      <ActionBtn>Flight Details</ActionBtn>
      <ActionBtn>Price Details</ActionBtn>
      <ActionBtn className="ml-auto">Edit Details</ActionBtn>
    </div>
  );
};
