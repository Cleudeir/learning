export default function TransformToHHMM(dateString: string): string {
  const options = {hour: '2-digit', minute: '2-digit', hour12: false};
  const date = new Date(dateString);
  const formattedTime = date.toLocaleTimeString('en-US', options as any);

  return formattedTime;
}
