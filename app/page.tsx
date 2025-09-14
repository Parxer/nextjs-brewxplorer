import { Stack, Text } from "@chakra-ui/react";
import ContentWrapper from "@/app/components/contentWrapper";

export default function Home() {
  return (
    <ContentWrapper as="main">
      <Stack>
        <Text>Hi there world!</Text>
      </Stack>
    </ContentWrapper>
  );
}
