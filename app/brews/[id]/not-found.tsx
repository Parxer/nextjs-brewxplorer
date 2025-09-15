import ContentWrapper from "@/app/components/contentWrapper";
import { Heading, Text } from "@chakra-ui/react";
import InternalLink from "@/app/components/internalLink";

export default function BeerNotFound() {
  return (
    <ContentWrapper as="main" marginY={20}>
      <Heading as="h1">Error 404: Beer not found</Heading>
      <Text>
        Looks like this is not the beer you were looking for... Feel free to
        select one from{" "}
        <InternalLink href="/brews" variant="underline">
          the list
        </InternalLink>
        !
      </Text>
    </ContentWrapper>
  );
}
