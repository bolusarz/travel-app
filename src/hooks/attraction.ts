import { AttractionService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useFetchAttractionLocations = (searchStr: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["attraction-fetch-destinations", searchStr],
    queryFn: () => AttractionService.getLocations(searchStr),
    enabled: !!searchStr,
  });

  return {
    locations: data?.data?.products || [],
    isLoading,
  };
};

export const useFetchAttractions = (locationId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-attractions", locationId],
    queryFn: () => AttractionService.getAttractions(locationId),
    enabled: !!locationId,
  });

  return {
    attractions: data?.data.products,
    isLoading,
  };
};

export const useFetchAttraction = (slug: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-attraction-details", slug],
    queryFn: () => AttractionService.getAttractionDetails(slug),
    enabled: !!slug,
  });

  return {
    attraction: data?.data,
    isLoading,
  };
};
