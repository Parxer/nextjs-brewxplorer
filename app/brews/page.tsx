"use client";

import { useBeersQuery } from "@/data/queries";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import BeerCard from "@/app/brews/beerCard";
import { BrewsLoader } from "@/app/brews/loader";
import ContentWrapper from "@/app/components/contentWrapper";
import PaginationControls from "@/app/components/paginationControls";
import { parseAsInteger, useQueryState } from "nuqs";
import ListControls from "@/app/brews/listControls";
import { Suspense } from "react";

const Brews = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const { data, error, isLoading, refetch } = useBeersQuery({ page });

  if (error)
    return (
      <Box>
        <Text>Looks like a bad batch... </Text>
        <Button variant="subtle" onClick={() => refetch()}>
          Reload
        </Button>
      </Box>
    );
  return (
    <ContentWrapper as="main" marginY={10}>
      <ListControls />
      <SimpleGrid as="ol" columns={{ base: 1, md: 2, xl: 3 }} gap={10}>
        {isLoading ? (
          <BrewsLoader />
        ) : (
          data?.map((item) => (
            <Box as="li" key={item.id}>
              <BeerCard {...item} />
            </Box>
          ))
        )}
      </SimpleGrid>
      <PaginationControls page={page} setPage={setPage} />
    </ContentWrapper>
  );
};

export default function BrewsPage() {
  return (
    <Suspense>
      <Brews />
    </Suspense>
  );
}
