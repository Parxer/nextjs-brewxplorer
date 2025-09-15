import { Heading, Stack, Text } from "@chakra-ui/react";
import ContentWrapper from "@/app/components/contentWrapper";
import ExternalLink from "@/app/components/externalLink";

export default function Page() {
  return (
    <ContentWrapper as="main" marginY={10}>
      <Stack gap={10}>
        <Stack gap={5}>
          <Heading>What is this?</Heading>
          <Text>
            Brewxplorer is a website that lets you browse all of{" "}
            <ExternalLink
              href="https://drink.brewdog.com/uk/diy-dog"
              variant="underline"
            >
              BrewDog&#39;s DIY Dog
            </ExternalLink>{" "}
            database - an archive of all their recipes in a DIY-ready form.
          </Text>
        </Stack>
        <Stack gap={5}>
          <Heading>But what is this really?</Heading>
          <Text>
            It is a little project I put together using mostly{" "}
            <ExternalLink href="https://chakra-ui.com/">Chakra UI</ExternalLink>{" "}
            +{" "}
            <ExternalLink href="https://tanstack.com/query">
              React Query
            </ExternalLink>
            . You can check the code{" "}
            <ExternalLink href="https://github.com/Parxer/nextjs-brewxplorer">
              right here
            </ExternalLink>
            .
          </Text>
        </Stack>
      </Stack>
    </ContentWrapper>
  );
}
