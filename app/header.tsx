"use client";

import { usePathname } from "next/navigation";
import { Box, Image, Link, LinkProps, Stack } from "@chakra-ui/react";
import ContentWrapper from "@/app/components/contentWrapper";

const NavLink = ({ href, children }: LinkProps) => {
  const isActive = usePathname() === href;
  return (
    <Box as="li">
      <Link
        href={href}
        borderBottom="3px solid"
        borderColor={isActive ? "gold" : "transparent"}
        _hover={{
          borderColor: "gold",
        }}
        transition="all 0.2s ease-in-out"
        textDecoration="none"
      >
        {children}
      </Link>
    </Box>
  );
};

export default function Header() {
  return (
    <ContentWrapper
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src="/logo.png" alt="Brewxplorer logo" width={150} height={46} />
      <Stack
        direction={{ base: "column", md: "row" }}
        as="ul"
        position="sticky"
        gap={5}
        paddingY={5}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/brews">All Brews</NavLink>
        <NavLink href="/about">About</NavLink>
      </Stack>
    </ContentWrapper>
  );
}
