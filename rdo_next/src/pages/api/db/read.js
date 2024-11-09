// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Db from '@/components/Back/Db';

export default async function handler(req, res) {
    const { tableName, item, value } = req.body;
    console.log(tableName, item, value);

    if (tableName) {
        try {
            const result = await Db.read(tableName, item, value);
            console.log(result);
            return res.send(result);
        } catch (error) {
            console.error(error);
            return res.status(500).send("Internal Server Error");
        }
    }

    return res.status(400).send("Error: use {tableName: string, item?: string, value?: string}");
}
