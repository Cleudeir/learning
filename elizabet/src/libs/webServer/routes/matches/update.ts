import db from "../../../database";
import { Matches } from "../../../database/models/Matches";
import SequelizeParse from "../../../database/utils/SequelizeParse";
import messageUpdateScore from "../../../notification/messageUpdateScore";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function update({ query, body, headers }: any) {
  const match = body as Matches;
  const matchId = match.matchId;
  try {
    if (matchId == null) {
      return { error: "matchId não fornecido, correspondência já existe" };
    }
    const beforeUpdate = await SequelizeParse(db.Matches.findByPk(matchId));
    const update = await db.Matches.update(match, { where: { matchId } });
    if (update.includes(1)) {
      const afterUpdate = await SequelizeParse(db.Matches.findByPk(matchId));
      if (afterUpdate) {
        if (
          beforeUpdate.homeTeamScore === afterUpdate.homeTeamScore &&
          beforeUpdate.awayTeamScore === afterUpdate.awayTeamScore
        ) {
          return afterUpdate;
        } else {
          messageUpdateScore({ matchId, afterUpdate });
          return afterUpdate;
        }
      } else {
        return { error: "MatchId não encontrado" };
      }
    } else {
      return { error: "matchId não encontrado" };
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default update;
