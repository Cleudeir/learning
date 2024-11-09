import db from "../../../database";
import updateMatchWinners from "../../../database/utils/updateMatchWinners";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function readAllByClient({ query, body, headers }: any) {
  const clientId = query.clientId as string;
  const paymentStatus = query.paymentStatus as string;
  console.log("paymentStatus: ", paymentStatus);
  if (!clientId) return { error: "matchId não fornecido" };

  try {
    const resp = await db.Guess.findAll({
      where: {
        clientId,
      },
      logging: false,
    });
    await Promise.all(resp.map((item) => updateMatchWinners(item.matchId)));
    const result = await db.Guess.findAll({
      where: {
        clientId,
        paymentStatus,
      },
      include: [
        {
          model: db.Matches,
          as: "match",
        },
      ],
      order: [[{ model: db.Matches, as: "match" }, "matchDate", "ASC"]],
      logging: false,
    });
    if (result.length === 0) {
      return { error: "nenhum palpite encontrado" };
    } else {
      return result;
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default readAllByClient;
