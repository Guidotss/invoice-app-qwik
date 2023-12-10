export function getDate(date: Date): string {
  
  const month = date.toLocaleString("en-us", { month: "long" }).slice(0, 3);
  return `${date.getUTCDate()} ${month} ${date.getFullYear()}`;
}
