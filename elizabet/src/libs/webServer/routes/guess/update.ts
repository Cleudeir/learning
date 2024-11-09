import db from "../../../database";
import { Guess } from "../../../database/models/Guess";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function createUpdate({ query, body, headers }: any) {
  const guess = body as Guess;
  const guessId = guess.guessId;
  try {
    if (guessId == null) {
      return { error: "guessId não recebido" };
    }
    const resp = await db.Guess.update(guess, { where: { guessId } });
    if (resp.includes(1)) {
      const resp = await db.Guess.findByPk(guessId, {
        include: [
          {
            attributes: ["homeTeamName", "awayTeamName", "matchDate"],
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
      return resp;
    } else {
      return { error: "guessId não encontrado" };
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default createUpdate;
