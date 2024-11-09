// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  Db from '@/components/Back/Db';

export default async function handler(req, res) {
  const tableName = req.body.tableName
  const item = req.body.item
  const value = req.body.value
  console.log(tableName, item, value)
  if (tableName) {
      const result = await Db.destroy(tableName, item, value)
      console.log({result})
      return res.send({result})
  }
  return res.send("error: use {tableName: string, item?: string, value?: string}")

}
