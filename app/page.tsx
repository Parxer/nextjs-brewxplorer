import { Heading, Stack, Text } from "@chakra-ui/react";
import ContentWrapper from "@/app/components/contentWrapper";
import RandomBeer from "@/app/components/randomBeer";
import ExternalLink from "@/app/components/externalLink";

export default function Home() {
  return (
    <ContentWrapper as="main" marginY={10}>
      <Stack gap={5}>
        <Heading as="h2" size="xl">
          Welcome to Brewxplorer
        </Heading>
        <Text>
          Hello there, beer enthusiasts! Tap into the BrewDog&#39;s recipe
          catalogue (powered by the{" "}
          <ExternalLink href="https://github.com/alxiw/punkapi?tab=readme-ov-file#httpspunkapionlinev3">
            PunkAPI project
          </ExternalLink>
          )
        </Text>
        <RandomBeer />
      </Stack>
    </ContentWrapper>
  );
}
