import {initDb, Db}  from '@/components/Back/Db';
export default async function handler(req, res) {
  const tableName= req.body.tableName 
  const params= req.body.params 
  const updateOnDuplicate= req.body.updateOnDuplicate 
  console.log({tableName, params, updateOnDuplicate})
  if (tableName && params) {
    const init = await initDb()
    const db = new Db(init)
      const result = await db.insert(tableName.toLocaleUpperCase(), params, updateOnDuplicate)
      console.log(result)
      return res.send(result)
  }
  return res.send("error: use {tableName: string, params: obj}")
}
