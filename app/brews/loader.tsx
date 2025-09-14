import { Card, Skeleton } from "@chakra-ui/react";
import { useSettings } from "@/app/settingsContext";

export const BrewsLoader = () => {
  const { itemsPerPage } = useSettings();
  return (
    <>
      {new Array(itemsPerPage).fill(0).map((_, i) => (
        <Card.Root width="100%" height={282} key={i}>
          <Skeleton w="100%" h="100%" />
        </Card.Root>
      ))}
    </>
  );
};
