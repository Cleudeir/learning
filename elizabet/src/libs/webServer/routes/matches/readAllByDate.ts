import { Op } from "sequelize";
import db from "../../../database";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function readAllByDate({ query, body, headers }: any) {
  const startDate = query.date as string;
  const type = query.type as string;
  const range = query.range as string;
  const order = query.order as string;

  if (!startDate || !type) {
    return { error: "Parâmetro 'type' or 'date' não enviado" };
  }
  if (order !== "ASC" && order !== "DESC") {
    return { error: "Parâmetro 'order' is 'DESC' or 'ASC'" };
  }
  let where: any;
  let endDate;

  function getDate() {
    let days = 24 * 60 * 60 * 1000;
    let op = type === "after" ? 1 : -1;
    if (range === "week") {
      days = days * 7;
    } else if (range === "moth") {
      days = days * 30;
    }
    endDate = new Date(Date.parse(startDate) + days * op)
      .toJSON()
      .toLocaleString();
    return endDate;
  }

  if (type === "after") {
    where = {
      matchDate: {
        [Op.between]: [startDate, getDate()] as string[],
      },
    };
  } else if (type === "before") {
    where = {
      matchDate: {
        [Op.between]: [getDate(), startDate] as string[],
      },
    };
  } else if (type === "now") {
    where = {
      matchDate: {
        [Op.eq]: startDate,
      },
    };
  } else {
    return { error: "'type' inválido" };
  }
  try {
    const resp = JSON.parse(
      JSON.stringify(
        await db.Matches.findAll({
          where,
          order: [["matchDate", order]],
        })
      )
    );
    if (resp.length === 0) {
      return { error: "nenhuma partida encontrado" };
    } else {
      return resp;
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}
export default readAllByDate;
