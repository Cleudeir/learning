import { Op } from "sequelize";
import db from "../../../database";
import ErrorsTranslate from "../../utils/ErrorsTranslate";

async function readAllByDate({ query, body, headers }: any) {
  console.log("query: ", query);
  const date = query.date as string;
  const type = query.type as string;

  if (!date || !type) {
    return { error: "Parâmetros 'type' ou 'date' não fornecido" };
  }

  let where;
  if (type === "after") {
    where = {
      createdAt: {
        [Op.gt]: date,
      },
    };
  } else if (type === "before") {
    where = {
      createdAt: {
        [Op.lt]: date,
      },
    };
  } else if (type === "exact") {
    where = {
      createdAt: {
        [Op.eq]: date,
      },
    };
  } else {
    return { error: "parâmetro 'type' Inválido" };
  }

  try {
    const resp = await db.Guess.findAll({
      where,
      order: [
        [{ model: db.Matches, as: "match" }, "matchDate", "ASC"], // Order by Matches' matchDate in ASCending order
      ],
      include: [
        {
          model: db.Matches,
          as: "match",
        },
        {
          attributes: ["email", "pixKey", "permission", "pushToken"],
          model: db.Clients,
          as: "client",
        },
      ],
    });

    if (resp.length === 0) {
      return { error: "nenhum palpite encontrado" };
    } else {
      return resp;
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default readAllByDate;
