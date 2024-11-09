export default function parseCapitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
