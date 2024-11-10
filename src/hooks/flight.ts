import { FetchFlightParams, FlightService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useFetchDestinations = (searchStr: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-destinations", searchStr],
    queryFn: () => FlightService.getLocations(searchStr),
    enabled: !!searchStr,
  });

  return {
    locations: data?.data || [],
    isLoading,
  };
};

export const useFetchFlights = (payload: FetchFlightParams) => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-flights", ...Object.keys(payload)],
    queryFn: () => FlightService.getFlights(payload),
    enabled: Object.values(payload).every((val) => !!val),
  });

  return {
    flights: data?.data?.flightOffers,
    isLoading,
  };
};

export const useFetchFlight = (token: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-flight-details", token],
    queryFn: () => FlightService.getFlight(token),
    enabled: !!token,
  });

  return {
    flight: data?.data,
    isLoading,
  };
};
