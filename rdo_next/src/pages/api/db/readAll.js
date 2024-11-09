// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Db from '@/components/Back/Db';

export default async function handler(req, res) {
    const { tableName, tableIncrement, attributes } = req.body;
    console.log(tableName, tableIncrement, attributes);

    if (tableName) {
        try {
            const result = await Db.readAllIncludes(tableName, tableIncrement, attributes);
            console.log(result);
            return res.send(result);
        } catch (error) {
            console.error(error);
            return res.status(500).send("Internal Server Error");
        }
    }

    return res.status(400).send("Error: use {tableName: string, tableIncrement: string, attributes: object}");
}
