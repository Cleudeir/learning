export default function parseDateISO(dateStr: string) {
    const [day, month, year] = dateStr.split("/");
    const isoString = `${year}-${month}-${day}T00:00:00.000+00:00`;
    return isoString;
  }