import { Link, LinkProps } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

export default function ExternalLink({
  children,
  ...linkProps
}: LinkProps & { children?: React.ReactNode }) {
  return (
    <Link {...linkProps} variant="underline" target="_blank">
      {children} <LuExternalLink />
    </Link>
  );
}
