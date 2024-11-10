import { RAPID_API } from "@/config";
import {
  ApiService,
  Attraction,
  FetchAttractionLocationResponse,
  FetchAttractionResponse,
} from "@/services";
import { ApiResponse } from "@/types";

export class AttractionService {
  private static BASE_URL = `${RAPID_API.base}/attraction`;

  public static async getLocations(searchStr: string) {
    return ApiService.get<ApiResponse<FetchAttractionLocationResponse>>(
      this.BASE_URL + "/searchLocation",
      {
        query: { query: searchStr },
      },
    );
  }

  public static async getAttractions(locationId: string) {
    return ApiService.get<ApiResponse<FetchAttractionResponse>>(
      this.BASE_URL + "/searchAttractions",
      { query: { id: locationId } },
    );
  }

  public static async getAttractionDetails(slug: string) {
    return ApiService.get<ApiResponse<Attraction>>(
      this.BASE_URL + "/getAttractionDetails",
      { query: { slug } },
    );
  }
}
