export type AttractionLocation = {
  id: string;
  title: string;
  productId: string;
  cityName: string;
};

export type FetchAttractionLocationResponse = {
  products: Array<AttractionLocation>;
};

export type FetchAttractionResponse = {
  products: Array<{
    id: string;
    name: string;
    slug: string;
    reviewStats: {
      allReviewsCount: number;
      percentage: string;
      combinedNumericStats: {
        average: number;
        total: number;
      };
    };
  }>;
};

export type Attraction = {
  description: string;
  shortDescription: string;
  id: string;
  name: string;
  photos: Array<{
    small: string;
  }>;
  reviewsStats: {
    allReviewsCount: number;
    combinedNumericStats: {
      average: number;
      total: number;
    };
  };
};
