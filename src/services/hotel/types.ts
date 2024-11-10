export type HotelLocation = {
  label: string;
  image_url: string;
  dest_id: string;
  dest_type: string;
  name: string;
  country: string;
};

export type FetchHotelsParams = {
  dest_id: string;
  search_type: string;
  arrival_date: string;
  departure_date: string;
};

export type FetchHotelDetailsParams = {
  hotel_id: string;
  arrival_date: string;
  departure_date: string;
};

export type FetchHotelResponse = {
  hotels: Array<{
    accessibilityLabel: string;
    property: {
      id: number;
      name: string;
      photoUrls: string[];
      reviewScore: number;
      reviewCount: number;
      checkoutDate: string;
      checkinDate: string;
      checkin: {
        untilTime: string;
        fromTime: string;
      };
      checkout: {
        untilTime: string;
        fromTime: string;
      };
      priceBreakdown: {
        grossPrice: {
          currency: string;
          value: number;
        };
      };
    };
  }>;
};

export type HotelDetails = {
  hotel_id: number;
  hotel_name: string;
  arrival_date: string;
  departure_date: string;
  address: string;
  city: string;
  available_rooms: number;
  property_highlight_strip: Array<{
    name: string;
    icon_list: Array<{
      size: number;
      icons: string;
    }>;
  }>;
  product_price_breakdown: {
    gross_amount: {
      currency: string;
      amount_unrounded: string;
    };
  };
  rooms: Record<string, unknown>;
};
