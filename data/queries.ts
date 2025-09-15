import { QueryCache, useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/data/api";
import { QueryClient } from "@tanstack/query-core";
import { Beer } from "@/app/types";
import { toaster } from "@/app/components/toaster";
import { useSettings } from "@/app/settingsContext";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: false,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.error(error);
      toaster.error({
        title: "API Error",
        description: error.message,
      });
    },
  }),
});

interface BeersProps {
  page: number;
  per_page?: number;
  beer_name?: string;
}

export const useBeersQuery = (props: BeersProps) => {
  const params = new URLSearchParams(Object.entries(props));
  const { itemsPerPage } = useSettings();
  params.set("per_page", itemsPerPage.toString());
  return useQuery({
    queryKey: ["beers", props, itemsPerPage],
    queryFn: () => apiFetch<Beer[]>(`/beers?${params.toString()}`),
  });
};

export const useBeerQuery = (id: number) => {
  return useQuery({
    queryKey: ["beer", id],
    queryFn: () => apiFetch<Beer>(`/beers/${id}`),
  });
};

export const useDailyBeerQuery = () => {
  const dayInMilliseconds = 1000 * 60 * 60 * 24;
  return useQuery({
    queryKey: ["dailyBeer"],
    queryFn: () => apiFetch<Beer>("/beers/random"),
    staleTime: dayInMilliseconds,
    gcTime: dayInMilliseconds,
  });
};
