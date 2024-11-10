import { RAPID_API } from "@/config";
import { ApiService } from "@/services";
import { ApiResponse } from "@/types";
import {
  FetchHotelDetailsParams,
  FetchHotelResponse,
  FetchHotelsParams,
  HotelDetails,
  HotelLocation,
} from "@/services/hotel/types.ts";

export class HotelService {
  private static BASE_URL = `${RAPID_API.base}/hotels`;

  public static async getLocations(searchStr: string) {
    return ApiService.get<ApiResponse<HotelLocation[]>>(
      this.BASE_URL + "/searchDestination",
      {
        query: { query: searchStr },
      },
    );
  }

  public static async getHotels(payload: FetchHotelsParams) {
    return ApiService.get<ApiResponse<FetchHotelResponse>>(
      this.BASE_URL + "/searchHotels",
      { query: payload },
    );
  }

  public static async getHotel(payload: FetchHotelDetailsParams) {
    return ApiService.get<ApiResponse<HotelDetails>>(
      this.BASE_URL + "/getHotelDetails",
      { query: payload },
    );
  }
}
