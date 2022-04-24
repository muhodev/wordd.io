import cn from "classnames";

export function Label({ children, className, ...rest }) {
  return (
    <label
      className={cn(className, "font-medium text-sm text-gray-500")}
      {...rest}
    >
      {children}
    </label>
  );
}
