import {
  FetchHotelDetailsParams,
  FetchHotelsParams,
  HotelService,
} from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useFetchHotelLocations = (searchStr: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["hotel-fetch-destinations", searchStr],
    queryFn: () => HotelService.getLocations(searchStr),
    enabled: !!searchStr,
  });

  return {
    locations: data?.data || [],
    isLoading,
  };
};

export const useFetchHotels = (payload: FetchHotelsParams) => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-hotels", ...Object.keys(payload)],
    queryFn: () => HotelService.getHotels(payload),
    enabled: Object.values(payload).every((val) => !!val),
  });

  return {
    hotels: data?.data.hotels,
    isLoading,
  };
};

export const useFetchHotel = (payload: FetchHotelDetailsParams) => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-hotel-details", ...Object.keys(payload)],
    queryFn: () => HotelService.getHotel(payload),
    enabled: Object.values(payload).every((val) => !!val),
  });

  return {
    hotel: data?.data,
    isLoading,
  };
};
