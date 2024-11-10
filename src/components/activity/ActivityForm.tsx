import React, { useState } from "react";
import { useFetchAttractionLocations, useFetchAttractions } from "@/hooks";
import { AutoCompleteInput } from "@/components";

type Prop = {
  addActivity: (slug: string) => void;
};

const ActivityForm: React.FC<Prop> = ({ addActivity }) => {
  const [locationId, setLocationId] = useState("");

  const { isLoading, attractions } = useFetchAttractions(locationId);

  const [selectedAttraction, setSelectedAttraction] = useState("");

  return (
    <section>
      <form className="flex flex-col gap-3 p-6">
        <LocationInput
          label="Location"
          onSelect={(value) => setLocationId(value)}
        />
      </form>
      <p className="mt-10 mb-2 text-lg font-medium px-6">Attraction Options</p>
      <ul className="grid w-full gap-6 px-6 md:grid-cols-2 max-h-[400px] overflow-y-auto">
        {isLoading ? <li>Fetching attractions....</li> : null}
        {attractions?.map((attraction) => (
          <li>
            <input
              type="radio"
              id={attraction.name}
              name="hosting"
              value={attraction.slug}
              className="hidden peer"
              required
              onChange={(evt) => setSelectedAttraction(evt.currentTarget.value)}
            />
            <label
              htmlFor={attraction.name}
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">
                  {attraction.name}
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
      {selectedAttraction ? (
        <div className="flex py-4 bg-white border-t border-black/50 px-6">
          <button
            type="button"
            className="ml-auto w-[150px] text-lg bg-[#0D6EFD] rounded text-white py-3"
            onClick={() => addActivity(selectedAttraction)}
          >
            Add Attraction
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default ActivityForm;

const LocationInput: React.FC<{
  label: string;
  onSelect: (value: string) => void;
}> = ({ label, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const { isLoading, locations } = useFetchAttractionLocations(inputValue);

  return (
    <AutoCompleteInput
      suggestions={locations.map((location) => ({
        key: location.id,
        value: `${location.title}, ${location.cityName}`,
      }))}
      onChange={setInputValue}
      onSelected={onSelect}
      selectedKey=""
      isLoading={isLoading}
      label={label}
    />
  );
};
