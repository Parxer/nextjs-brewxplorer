import { Card, SimpleGrid, Skeleton } from "@chakra-ui/react";

export const BrewsLoader = () => (
  <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={10} padding={10}>
    {new Array(30).fill(0).map((_, i) => (
      <Card.Root width="100%" height={282} key={i}>
        <Skeleton w="100%" h="100%" />
      </Card.Root>
    ))}
  </SimpleGrid>
);
