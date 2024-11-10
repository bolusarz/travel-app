import { ApiResponse } from "@/types";
import {
  ApiService,
  FetchFlightParams,
  FetchFlightsResponse,
  Location,
} from "@/services";
import { RAPID_API } from "@/config";

export class FlightService {
  private static BASE_URL = `${RAPID_API.base}/flights`;

  public static async getLocations(searchStr: string) {
    return ApiService.get<ApiResponse<Location[]>>(
      this.BASE_URL + "/searchDestination",
      {
        query: { query: searchStr },
      },
    );
  }

  public static async getFlights(payload: FetchFlightParams) {
    return ApiService.get<ApiResponse<FetchFlightsResponse>>(
      this.BASE_URL + "/searchFlights",
      { query: payload },
    );
  }

  public static async getFlight(token: string) {
    return ApiService.get<ApiResponse<FetchFlightsResponse["flightOffers"][0]>>(
      this.BASE_URL + "/getFlightDetails",
      { query: { token } },
    );
  }
}
