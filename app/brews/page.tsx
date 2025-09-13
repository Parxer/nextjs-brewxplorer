"use client";

import { useBeersQuery } from "@/app/queries";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";

export default function Brews() {
  const { data, error, isLoading, refetch } = useBeersQuery({ page: 1 });

  if (isLoading) return "Loading...";
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
    <SimpleGrid as="ol" columns={{ base: 1, md: 2, xl: 3 }}>
      {data?.length &&
        data.map((item) => (
          <Box as="li" key={item.id}>
            {item.name}
          </Box>
        ))}
    </SimpleGrid>
  );
}
