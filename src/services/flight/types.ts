export type Location = {
  id: string;
  type: string;
  name: string;
  code: string;
  city: string;
  cityName: string;
  regionName: string;
  country: string;
  countryName: string;
  countryNameShort: string;
  photoUri: string;
  distanceToCity: { value: number; unit: string };
  parent: string;
};

export type FetchFlightParams = {
  fromId: string;
  toId: string;
  departDate: string;
};

export type FetchFlightsResponse = {
  flightOffers: Array<{
    token: string;
    segments: Array<{
      departureAirport: {
        type: string;
        code: string;
        name: string;
        city: string;
        cityName: string;
        country: string;
        countryName: string;
        province: string;
      };
      arrivalAirport: {
        type: string;
        code: string;
        name: string;
        city: string;
        cityName: string;
        country: string;
        countryName: string;
      };
      legs: Array<{
        cabinClass: string;
        carriersData: Array<{ name: string; code: string; logo: string }>;
        flightInfo: {
          flightNumber: number;
          planeType: string;
        };
        amenities: Array<{
          category: "ENTERTAINMENT" | "FOOD" | "POWER";
        }>;
      }>;
      travelerCheckedLuggage: Array<{
        luggageAllowance: { maxTotalWeight: number; massUnit: string };
      }>;
      travelerCabinLuggage: Array<{
        luggageAllowance: { maxTotalWeight: number; massUnit: string };
      }>;
      departureTime: string;
      arrivalTime: string;
      totalTime: number;
    }>;
    priceBreakdown: {
      total: {
        currencyCode: string;
        units: number;
        nanos: number;
      };
    };
  }>;
};

export type FlightDetails = {
  token: string;
  segments: Array<{
    departureAirport: {
      type: string;
      code: string;
      name: string;
      city: string;
      cityName: string;
      country: string;
      countryName: string;
      province: string;
    };
    arrivalAirport: {
      type: string;
      code: string;
      name: string;
      city: string;
      cityName: string;
      country: string;
      countryName: string;
    };
    legs: Array<{
      cabinClass: string;
      carriersData: Array<{ name: string; code: string; logo: string }>;
      flightInfo: {
        flightNumber: number;
        planeType: string;
      };
      amenities: Array<{
        category: "ENTERTAINMENT" | "FOOD" | "POWER";
      }>;
    }>;
    travelerCheckedLuggage: Array<{
      luggageAllowance: { maxTotalWeight: number; massUnit: string };
    }>;
    travelerCabinLuggage: Array<{
      luggageAllowance: { maxTotalWeight: number; massUnit: string };
    }>;
    departureTime: string;
    arrivalTime: string;
    totalTime: number;
  }>;
  priceBreakdown: {
    total: {
      currencyCode: string;
      units: number;
      nanos: number;
    };
  };
};
