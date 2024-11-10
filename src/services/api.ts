import { RAPID_API } from "@/config";

export class ApiService {
  private static headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  static async get<T extends Record<string, never>>(
    endpoint: string,
    config?: {
      query?: Record<string, string>;
      headers?: Record<string, never>;
    },
  ) {
    console.log(endpoint);
    const url = new URL(endpoint);

    url.search = new URLSearchParams(config?.query).toString();

    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...this.headers,
        "x-rapidapi-key": RAPID_API.api_key,
        "x-rapidapi-host": RAPID_API.host,
        ...config?.headers,
      },
    });
    return (await response.json()) as unknown as T;
  }
}
