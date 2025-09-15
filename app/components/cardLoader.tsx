import { Card, Skeleton } from "@chakra-ui/react";

export default function CardLoader() {
  return (
    <Card.Root width="100%" height={282}>
      <Skeleton w="100%" h="100%" />
    </Card.Root>
  );
}
