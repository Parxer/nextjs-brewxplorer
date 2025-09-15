import { Beer } from "@/app/types";
import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";
import { getImageUrl } from "@/data/api";
import InternalLink from "@/app/components/internalLink";

export default function BeerCard({ id, name, image, description }: Beer) {
  // noinspection HtmlUnknownTarget
  return (
    <Card.Root
      flexDirection="row-reverse"
      variant="elevated"
      p={4}
      justifyContent="space-between"
    >
      <Image
        display={{ base: "none", sm: "initial" }}
        src={getImageUrl(image)}
        maxHeight={250}
        alt={`image of ${name}`}
        marginRight={4}
        alignSelf="center"
        loading="lazy"
      />
      <Card.Body
        maxWidth={{ base: "100%", sm: "80%" }}
        height={250}
        overflow="hidden"
        position="relative"
      >
        <Card.Title marginBottom={2}>
          <InternalLink href={`/brews/${id}`}>
            <Heading size="xl">{name}</Heading>
          </InternalLink>
        </Card.Title>
        <Card.Description>{description}</Card.Description>
        <Box
          position="absolute"
          left={0}
          bottom={0}
          height="4em"
          width="100%"
          paddingLeft={6}
          background="linear-gradient(0deg, rgba(255, 255, 255, 1) 35%, rgba(255, 255, 255, 0) 100%)"
          alignContent="end"
        >
          <InternalLink href={`/beers/${id}`}>
            <Text fontSize="0.9em">read more...</Text>
          </InternalLink>
        </Box>
      </Card.Body>
    </Card.Root>
  );
}
