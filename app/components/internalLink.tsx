import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

export default function InternalLink({
  children,
  href,
  ...linkProps
}: LinkProps & { children?: React.ReactNode; href: string }) {
  return (
    <Link {...linkProps} asChild>
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
}
