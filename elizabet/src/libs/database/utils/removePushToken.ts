import { Op } from "sequelize";
import database from "..";
import { Clients } from "../models/Clients";
import SequelizeParse from "./SequelizeParse";

export default async function removePushToken(
  responses: any[],
  tokens: string[]
) {
  try {
    const erros = responses.map((sendErro: any, index: any) => {
      if (!sendErro.success) return index;
    });
    const tokensErrors: string[] = tokens.filter((element, index) =>
      erros.includes(index)
    );
    const find = (await SequelizeParse(
      database.Clients.findAll({
        attributes: ["clientId", "pushToken"],
        where: {
          pushToken: {
            [Op.in]: tokensErrors,
          },
        },
      })
    )) as Clients[];
    console.log("find", find);
    const filter = find.map((item: Clients) => ({
      clientId: item.clientId,
      pushToken: null,
    }));
    console.log("filter: ", filter);
    await database.Clients.bulkCreate(filter, {
      updateOnDuplicate: ["clientId", "pushToken"],
      logging: true,
    });
  } catch (error) {
    console.log("error: ", error);
  }
}
