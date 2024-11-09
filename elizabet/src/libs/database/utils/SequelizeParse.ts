async function SequelizeParse(data: any) {
  try {
    const result = await JSON.parse(JSON.stringify(await data));
    return result;
  } catch (error) {
    return null;
  }
}
export default SequelizeParse;
