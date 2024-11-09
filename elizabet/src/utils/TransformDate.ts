function TransformDate(dateString: string | Date): string {
  const parsedDate = new Date(dateString);

  // Adjust the time zone by -3 hours
  parsedDate.setHours(parsedDate.getHours() - 3);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "UTC",
    timeZoneName: "short",
  };

  const formatter = new Intl.DateTimeFormat("pt-BR", options);
  const completeDate = formatter.format(parsedDate);
  const result = completeDate.replace(" GMT", "h").replace(" UTC", "h");
  return result;
}
export default TransformDate;
