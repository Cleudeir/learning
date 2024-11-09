import db from "../../../database";
import { Teams } from "../../../database/models/Teams";
import SequelizeParse from "../../../database/utils/SequelizeParse";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function createUpdate({ query, body, headers }: any) {
  const team = body as Teams;
  const teamId = team.teamId;
  try {
    if (!teamId) {
      return { error: "teamId não fornecido" };
    } else if (!team.name) {
      return { error: "nome não fornecido" };
    }
    const resp = await db.Teams.update(team, {
      where: { teamId: teamId },
    });
    console.log("resp: ", resp);
    if (resp.includes(1)) {
      const resp = await SequelizeParse(db.Teams.findByPk(teamId));
      if (resp) {
        return resp;
      } else {
        return { error: "teamId não encontrado" };
      }
    } else {
      return { error: "teamId não encontrado" };
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default createUpdate;
