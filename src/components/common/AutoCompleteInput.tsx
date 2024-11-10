import React, { useEffect, useState } from "react";
import { useDebounce } from "@/hooks";

type Prop = {
  suggestions: Array<{ key: string; value: string }>;
  onChange: (value: string) => void;
  onSelected: (value: string) => void;
  selectedKey: string;
  isLoading: boolean;
  label: string;
};

const AutoCompleteInput: React.FC<Prop> = ({
  suggestions,
  selectedKey,
  onChange,
  onSelected,
  isLoading,
  label,
}) => {
  const [query, setQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debouncedValue = useDebounce(query, 600);

  const handleInputChange = (event: any) => {
    setShowSuggestions(true);
    const value = event.target.value;
    setQuery(value);
  };

  const handleSuggestionClick = (suggestion: Prop["suggestions"][0]) => {
    setQuery(suggestion.value);
    onSelected(suggestion.key);
    setShowSuggestions(false);
  };

  useEffect(() => {
    if (selectedKey) {
      setQuery(
        suggestions.find((suggestion) => suggestion.key === selectedKey)
          ?.value || "",
      );
    }
  }, []);

  useEffect(() => {
    if (debouncedValue.length && showSuggestions) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, showSuggestions]);

  return (
    <div className="relative">
      <label className="flex flex-col gap-1">
        <span className="font-medium text-lg">{label}:</span>
        <input
          className="border w-full border-black p-2"
          value={query}
          onChange={handleInputChange}
        />
      </label>
      {showSuggestions && (suggestions.length > 0 || isLoading) ? (
        <ul className="absolute z-10 rounded-md mt-1 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto">
          {isLoading ? <li>Fetching...</li> : null}
          {suggestions.map((suggestion) => (
            <li
              className="px-4 py-2 cursor-pointer hover:scale-95 transition-transform"
              key={suggestion.key}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default AutoCompleteInput;
