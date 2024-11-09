import db from "../../../database";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function readById({ query, body, headers }: any) {
  const guessId = query.guessId as number;
  try {
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

    if (resp == null) {
      return { error: "Palpite não encontrado" };
    }
    return resp;
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default readById;
