import NextLink from "next/link";

export function Link({ href, children, ...rest }) {
  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  );
}
