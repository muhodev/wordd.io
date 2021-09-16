import { Link as RouterLink } from "react-router-dom";

export function Link({ href, children, ...rest }) {
  return (
    <RouterLink to={href} {...rest}>
      {children}
    </RouterLink>
  );
}
