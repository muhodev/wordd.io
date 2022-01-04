import NextLink from "next/link";
import { Text } from "@mantine/core";

export function Link({ href, children, color, inherit, style, ...rest }) {
  return (
    <NextLink href={href} {...rest}>
      <a style={style}>{children}</a>
    </NextLink>
  );
}
