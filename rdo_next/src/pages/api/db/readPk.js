// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  Db from '@/components/Back/Db';

export default async function handler(req, res) {
    const tableName= req.body.tableName
    const itemPK= req.body.itemPK
    const tableIncrement= req.body.tableIncrement
    console.log({ tableName, itemPK, tableIncrement })
    if (tableName) {
        const result = await Db.readPKincludes(tableName, itemPK, tableIncrement)
        return res.send(result)
    }
    return res.send("error: use {tableName: string, item?: string, value?: string}")
}
