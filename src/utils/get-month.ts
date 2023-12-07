export function getMonth(date: Date): string {
  const month = date.toLocaleString("en-us", { month: "long" }).slice(0, 3);
  return `${date.getDay()} ${month} ${date.getFullYear()}`;
}
