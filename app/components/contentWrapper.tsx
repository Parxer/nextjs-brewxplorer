import { ElementType, ReactNode } from "react";
import { Box, SystemStyleObject } from "@chakra-ui/react";

export default function ContentWrapper({
  as,
  children,
  ...otherProps
}: {
  as: ElementType;
  children: ReactNode;
} & SystemStyleObject) {
  return (
    <Box
      as={as}
      maxWidth={1440}
      marginX="auto"
      paddingX={[5, 5, 10]}
      {...otherProps}
    >
      {children}
    </Box>
  );
}
