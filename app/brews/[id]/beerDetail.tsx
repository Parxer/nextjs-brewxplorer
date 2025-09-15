"use client";

import { Beer } from "@/app/types";
import { useBeerQuery } from "@/data/queries";
import { notFound } from "next/navigation";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import { getImageUrl } from "@/data/api";

export default function BeerDetailPage({ id }: Pick<Beer, "id">) {
  const { data, isLoading, error } = useBeerQuery(id);
  if (error) notFound();
  if (isLoading) return "Loading...";

  return data ? (
    <Stack direction={{ base: "column", md: "row" }} gap={20}>
      <Stack gap={10}>
        <Heading>
          {data.id}: {data.name}
        </Heading>
        <Text>{data.description}</Text>
        <Text>Goes well with: {data.food_pairing?.join(", ")}</Text>
      </Stack>
      <Image
        src={getImageUrl(data.image)}
        alt={`image of ${data.name}`}
        height={350}
        objectFit="contain"
      />
    </Stack>
  ) : null;
}
