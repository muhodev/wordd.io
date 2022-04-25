export function formatDate(date) {
  const newDate = new Date(date);
  return `${newDate.getDate()}.${String(newDate.getMonth() + 1).padStart(
    2,
    "0"
  )}.${newDate.getFullYear()}`;
}
