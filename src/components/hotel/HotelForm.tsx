import React, { useState } from "react";
import { FetchHotelDetailsParams, FetchHotelsParams } from "@/services";
import { useFetchHotelLocations, useFetchHotels } from "@/hooks";
import { AutoCompleteInput, Input } from "@/components";
import { formatCurrency } from "@/util";

type Prop = {
  addHotel: (hotel: FetchHotelDetailsParams) => void;
};

const HotelForm: React.FC<Prop> = ({ addHotel }) => {
  const [hotelParams, setHotelParams] = useState<FetchHotelsParams>({
    dest_id: "",
    arrival_date: "",
    departure_date: "",
    search_type: "CITY",
  });

  const { hotels, isLoading } = useFetchHotels(hotelParams);

  const [selectedHotel, setSelectedHotel] = useState<FetchHotelDetailsParams>();

  const setFormValue = (key: string, value: string) => {
    if (value) {
      setHotelParams({
        ...hotelParams,
        [key]: value,
      });
    }
  };

  return (
    <section>
      <form className="flex flex-col gap-3 p-6">
        <LocationInput
          label="Location"
          onSelect={(value) => setFormValue("dest_id", value)}
        />
        <Input
          label="Arrival Date"
          containerClass="flex flex-col gap-1"
          labelClass="font-medium text-lg"
          className="border w-full border-black p-2"
          type="date"
          onChange={(evt) =>
            setFormValue("arrival_date", evt.currentTarget.value)
          }
        />
        <Input
          label="Departure Date"
          containerClass="flex flex-col gap-1"
          labelClass="font-medium text-lg"
          className="border w-full border-black p-2"
          type="date"
          onChange={(evt) =>
            setFormValue("departure_date", evt.currentTarget.value)
          }
        />
      </form>
      <p className="mt-10 mb-2 text-lg font-medium px-6">Hotel Options</p>
      <ul className="grid w-full gap-6 px-6 md:grid-cols-2 max-h-[400px] overflow-y-auto">
        {isLoading ? <li>Fetching hotels....</li> : null}
        {hotels?.map((hotel) => (
          <li>
            <input
              type="radio"
              id={hotel.property.name}
              name="hosting"
              value={hotel.property.id}
              className="hidden peer"
              required
              onChange={(evt) =>
                setSelectedHotel({
                  arrival_date: hotelParams.arrival_date,
                  departure_date: hotelParams.departure_date,
                  hotel_id: evt.currentTarget.value,
                })
              }
            />
            <label
              htmlFor={hotel.property.name}
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">
                  {hotel.property.name}
                </div>
                <div className="w-full">
                  {formatCurrency(
                    hotel.property.priceBreakdown.grossPrice.value,
                    hotel.property.priceBreakdown.grossPrice.currency,
                  )}
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
      {selectedHotel ? (
        <div className="flex py-4 bg-white border-t border-black/50 px-6">
          <button
            className="ml-auto w-[150px] text-lg bg-[#0D6EFD] rounded text-white py-3"
            onClick={() => (selectedHotel ? addHotel(selectedHotel) : null)}
          >
            Add Hotel
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default HotelForm;

const LocationInput: React.FC<{
  label: string;
  onSelect: (value: string) => void;
}> = ({ label, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const { isLoading, locations } = useFetchHotelLocations(inputValue);

  return (
    <AutoCompleteInput
      suggestions={locations.map((location) => ({
        key: location.dest_id,
        value: `${location.name}, ${location.country}`,
      }))}
      onChange={setInputValue}
      onSelected={onSelect}
      selectedKey=""
      isLoading={isLoading}
      label={label}
    />
  );
};
