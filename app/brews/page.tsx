"use client";

import { useBeersQuery } from "@/app/queries";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import BeerCard from "@/app/brews/beerCard";
import { BrewsLoader } from "@/app/brews/loader";
import ContentWrapper from "@/app/components/contentWrapper";

export default function Brews() {
  const { data, error, isLoading, refetch } = useBeersQuery({ page: 1 });

  if (isLoading) return <BrewsLoader />;
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
    <ContentWrapper as="main">
      <SimpleGrid as="ol" columns={{ base: 1, md: 2, xl: 3 }} gap={10} p={10}>
        {data?.length &&
          data.map((item) => (
            <Box as="li" key={item.id}>
              <BeerCard {...item} />
            </Box>
          ))}
      </SimpleGrid>
    </ContentWrapper>
  );
}
