import db from "../../../database";
import { Teams } from "../../../database/models/Teams";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function remove({ query, body, headers }: any) {
  const team = query as Teams;
  const teamId = Number(team.teamId);
  try {
    const resp = await db.Teams.destroy({ where: { teamId } });
    if (resp === 1) {
      return { message: "Equipe removida com sucesso" };
    } else {
      return { error: "Equipe não encontrada" };
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default remove;
