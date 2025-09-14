import { QueryCache, useQuery } from "@tanstack/react-query";
import { safeFetch } from "@/app/api";
import { QueryClient } from "@tanstack/query-core";
import { Beer } from "@/app/types";
import { toaster } from "@/app/components/toaster";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: false,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error.cause) console.error(error.cause);
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
  return useQuery({
    queryKey: ["beers"],
    queryFn: () => safeFetch<Beer[]>(`/beers?${params.toString()}`),
  });
};
