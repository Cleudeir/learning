import db from "../../../database";
import updateMatchWinners from "../../../database/utils/updateMatchWinners";
async function readAllByMatch({ query, body, headers }: any) {
  const matchId = query.matchId as string;
  if (!matchId) return { error: "matchId não fornecido" };

  try {
    const match = await db.Matches.findByPk(matchId, { raw: true });
    console.log("matchId: ", matchId);
    if (!match) {
      return { error: "Partida não encontrado" };
    }
    console.log("match: ", match);
    const resp = await db.Guess.findAll({
      where: {
        matchId,
      },
    });

    await Promise.all(resp.map((item) => updateMatchWinners(item.matchId)));
    const result = await db.Guess.findAll({
      where: {
        matchId,
      },
      include: [
        {
          attributes: ["email", "pixKey", "permission", "pushToken"],
          model: db.Clients,
          as: "client",
        },
      ],
    });

    if (result.length === 0) {
      return { error: "nenhum palpite encontrado" };
    } else {
      return result;
    }
  } catch (error: any) {
    if (error.errors && error.errors[0]?.message) {
      return { error: error.errors[0]?.message };
    } else if (error?.parent?.sqlMessage) {
      return { error: error?.parent?.sqlMessage };
    }
    return { error: error };
  }
}

export default readAllByMatch;
