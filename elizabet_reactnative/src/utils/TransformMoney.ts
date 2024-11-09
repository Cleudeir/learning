function TransformMoney(value: number): string {
  const valueString = Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const result = valueString;
  return result;
}
export default TransformMoney;
