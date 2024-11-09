import db from "../../../database";
import { Matches } from "../../../database/models/Matches";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function remove({ query, body, headers }: any) {
  const match = query as Matches;
  const matchId = Number(match.matchId);
  try {
    const resp = await db.Matches.destroy({ where: { matchId } });
    if (resp === 1) {
      return { message: "Partida removido com sucesso" };
    } else {
      return { error: "Partida não encontrada" };
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default remove;
