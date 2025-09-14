import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import ContentWrapper from "@/app/components/contentWrapper";
import { LuExternalLink } from "react-icons/lu";

export default function Page() {
  return (
    <ContentWrapper as="main" marginY={10}>
      <Stack>
        <Box>
          <Heading>What is this?</Heading>
          <Text>
            Brewxplorer is a website that lets you browse all of{" "}
            <Link
              href="https://drink.brewdog.com/uk/diy-dog"
              variant="underline"
            >
              BrewDog&#39;s DIY Dog <LuExternalLink />
            </Link>{" "}
            database - an archive of all their recipes in a DIY-ready form.
          </Text>
        </Box>
      </Stack>
    </ContentWrapper>
  );
}
