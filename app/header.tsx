"use client";

import { usePathname } from "next/navigation";
import { Box, Link, Stack } from "@chakra-ui/react";
import { FCWithChildren } from "@/app/types";

const NavLink: FCWithChildren<{ href: string }> = ({ href, children }) => {
  const isActive = usePathname() === href;
  return (
    <Box as="li">
      <Link
        href={href}
        p={2}
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
    <Box as="nav">
      <Stack
        direction={{ base: "column", md: "row" }}
        as="ul"
        position="sticky"
        p={3}
      >
        <NavLink href="/">Brewxplorer</NavLink>
        <NavLink href="/brews">All Brews</NavLink>
        <NavLink href="/about">About</NavLink>
      </Stack>
    </Box>
  );
}
