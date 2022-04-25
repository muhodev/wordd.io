export function array(arr) {
  return typeof arr === "string" ? [arr] : Array.isArray(arr) ? arr : [];
}
