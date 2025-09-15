"use client";

import { useDailyBeerQuery } from "@/data/queries";
import BeerCard from "@/app/components/beerCard";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { IoReload } from "react-icons/io5";
import CardLoader from "@/app/components/cardLoader";

export default function RandomBeer() {
  const { data, isLoading, refetch } = useDailyBeerQuery();

  return (
    <Box marginX="auto" width={{ base: "90%", md: "70%" }} maxWidth={768}>
      <Flex justifyContent="space-between" alignItems="baseline">
        <Heading as="h2" size="xl" marginTop={10} marginBottom={5}>
          Random beer:
        </Heading>{" "}
        <IconButton
          aria-label="refresh random beer"
          colorPalette="yellow"
          onClick={() => refetch()}
        >
          <IoReload />
        </IconButton>
      </Flex>
      {isLoading ? <CardLoader /> : data ? <BeerCard {...data} /> : null}
    </Box>
  );
}
