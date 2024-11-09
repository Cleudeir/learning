export default function TransformToDDMMM(dateString: string): string {
  const options = {day: 'numeric', month: 'long'};
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('pt-BR', options as any);

  return formattedDate;
}
