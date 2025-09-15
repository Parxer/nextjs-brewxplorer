import { Link, LinkProps } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

export default function ExternalLink({
  children,
  ...linkProps
}: LinkProps & { children?: React.ReactNode }) {
  return (
    <Link {...linkProps} variant="underline">
      {children} <LuExternalLink />
    </Link>
  );
}
