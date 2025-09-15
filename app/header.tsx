"use client";

import { usePathname } from "next/navigation";
import { Box, Drawer, Image, LinkProps, Portal, Stack } from "@chakra-ui/react";
import ContentWrapper from "@/app/components/contentWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import InternalLink from "@/app/components/internalLink";

const NavLink = ({ href, children }: LinkProps & { href: string }) => {
  const isActive = usePathname() === href;
  return (
    <Box as="li">
      <InternalLink
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
      </InternalLink>
    </Box>
  );
};

const Menu = () => (
  <Stack direction={{ base: "column", md: "row" }} as="ul" gap={5}>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/brews">All Brews</NavLink>
    <NavLink href="/about">About</NavLink>
  </Stack>
);

const DesktopMenu = () => (
  <Box display={["none", "none", "initial"]}>
    <Menu />
  </Box>
);

const MobileMenu = () => (
  <Box display={["initial", "initial", "none"]}>
    <Drawer.Root placement="end">
      <Drawer.Trigger>
        <GiHamburgerMenu size="2em" />
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content maxWidth="40vw">
            <Drawer.Body paddingY={8} justifyItems="end" textAlign="end">
              <Menu />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  </Box>
);

export default function Header() {
  return (
    <ContentWrapper
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top={0}
      zIndex={10}
      paddingY={5}
      bgColor="white"
      borderBottom="2px rgb(91, 51, 11) solid"
      boxShadow="0 5px 5px rgba(0, 0, 0, 0.15)"
    >
      <InternalLink href="/">
        <Image src="/logo.png" alt="Brewxplorer logo" width={150} height={46} />
      </InternalLink>
      <DesktopMenu />
      <MobileMenu />
    </ContentWrapper>
  );
}
