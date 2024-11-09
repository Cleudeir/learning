const tableName = req.body.tableName;
import  Db  from "@/components/Back/Db";

export default async function handler(req, res) {
  const item = req.body.item;
  const value = req.body.value;
  const params = req.body.params;
  console.log({ tableName, params });
  if (tableName && params) {
    const result = await Db.update(tableName, params, item, value);
    console.log(result);
    return res.send(result);
  }
  return res.send("error: use {tableName: string, params: obj}");
}
