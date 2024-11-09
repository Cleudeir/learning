const generateNumberOptions = (start: number, end: number) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    options.push({label: String(i), value: i});
  }
  return options;
};
export default generateNumberOptions;
