import React, { useState } from "react";
import { FetchFlightParams } from "@/services";
import { AutoCompleteInput, Input } from "@/components";
import { useFetchDestinations, useFetchFlights } from "@/hooks";
import { formatCurrency } from "@/util";

type Prop = {
  addFlight: (token: string) => void;
};

const FlightForm: React.FC<Prop> = ({ addFlight }) => {
  const [flightParams, setFlightParams] = useState<FetchFlightParams>({
    fromId: "",
    toId: "",
    departDate: "",
  });

  const { flights, isLoading } = useFetchFlights(flightParams);

  const [selectedToken, setSelectedToken] = useState("");

  const setFormValue = (key: string, value: string) => {
    if (value) {
      setFlightParams({
        ...flightParams,
        [key]: value,
      });
    }
  };

  return (
    <section>
      <form className="flex flex-col gap-3 p-6">
        <LocationInput
          label="From"
          onSelect={(value) => setFormValue("fromId", value)}
        />
        <LocationInput
          label="To"
          onSelect={(value) => setFormValue("toId", value)}
        />
        <Input
          label="Depature Date"
          containerClass="flex flex-col gap-1"
          labelClass="font-medium text-lg"
          className="border w-full border-black p-2"
          type="date"
          onChange={(evt) =>
            setFormValue("departDate", evt.currentTarget.value)
          }
        />
      </form>
      <p className="mt-10 mb-2 text-lg font-medium px-6">Flight Options</p>
      <ul className="grid w-full gap-6 px-6 md:grid-cols-2 max-h-[400px] overflow-y-auto">
        {isLoading ? <li>Fetching flights....</li> : null}
        {flights?.map((flight) => (
          <li>
            <input
              type="radio"
              id={flight.token}
              name="hosting"
              value={flight.token}
              className="hidden peer"
              required
              onChange={(evt) => setSelectedToken(evt.currentTarget.value)}
            />
            <label
              htmlFor={flight.token}
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">
                  {flight.segments[0].legs[0].carriersData[0].name}
                </div>
                <div className="w-full">
                  {formatCurrency(
                    flight.priceBreakdown.total.units,
                    flight.priceBreakdown.total.currencyCode,
                  )}
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
      {selectedToken ? (
        <div className="flex py-4 bg-white border-t border-black/50 px-6">
          <button
            type="button"
            className="ml-auto w-[150px] text-lg bg-[#0D6EFD] rounded text-white py-3"
            onClick={() => addFlight(selectedToken)}
          >
            Add Flight
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default FlightForm;

const LocationInput: React.FC<{
  label: string;
  onSelect: (value: string) => void;
}> = ({ label, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const { isLoading, locations } = useFetchDestinations(inputValue);

  return (
    <AutoCompleteInput
      suggestions={locations.map((location) => ({
        key: location.id,
        value: `${location.name}, ${location.countryName}`,
      }))}
      onChange={setInputValue}
      onSelected={onSelect}
      selectedKey=""
      isLoading={isLoading}
      label={label}
    />
  );
};
