import db from "../../../database";
import SequelizeParse from "../../../database/utils/SequelizeParse";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function readAll({ query, body, headers }: any) {
  const order = query.order as string;
  const limit = Number(query.limit) as number;
  if (order !== "ASC" && order !== "DESC") {
    return { error: "Parâmetro 'order' is 'DESC' or 'ASC'" };
  }
  try {
    const resp = await SequelizeParse(
      db.Matches.findAll({
        order: [["matchDate", order]],
        limit,
      })
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
export default readAll;
