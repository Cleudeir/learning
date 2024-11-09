function TransformDate(dateString: string | Date): string {
  const parsedDate = new Date(dateString);
  const timeZoneOffset = new Date().getTimezoneOffset() / 60;
  // Adjust the time zone by -3 hours
  parsedDate.setHours(parsedDate.getHours() - timeZoneOffset);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'UTC',
    timeZoneName: 'short',
  };

  const formatter = new Intl.DateTimeFormat('pt-BR', options);
  const completeDate = formatter.format(parsedDate);
  const result = completeDate.replace(' GMT', 'h');
  return result;
}
export default TransformDate;
