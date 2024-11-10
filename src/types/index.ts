import { SVGProps } from "react";
import { FetchHotelDetailsParams } from "@/services";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ApiResponse<T> = {
  status: boolean;
  message: string;
  timestamp: number;
  data: T;
};

export type AppState = {
  flights: string[];
  hotels: FetchHotelDetailsParams[];
  attractions: string[];
};

export const ActionTypes = {
  ADD_FLIGHT: "ADD_FLIGHT",
  REMOVE_FLIGHT: "REMOVE_FLIGHT",
  ADD_HOTEL: "ADD_HOTEL",
  REMOVE_HOTEL: "REMOVE_HOTEL",
  ADD_ATTRACTION: "ADD_ATTRACTION",
  REMOVE_ATTRACTION: "REMOVE_ATTRACTION",
};

export type AppAction = { type: string; payload: any };
