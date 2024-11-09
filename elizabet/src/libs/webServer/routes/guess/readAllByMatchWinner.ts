import db from "../../../database";
import { Guess } from "../../../database/models/Guess";
import updateMatchWinners from "../../../database/utils/updateMatchWinners";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
interface GuessMode extends Guess {
  client: {
    email: string;
    pixKey: string;
    permission: string;
  };
}

async function readAllByMatchWinner({ query, body, headers }: any) {
  const matchId = query.matchId as string;
  console.log("matchId: ", matchId);
  try {
    const match = await db.Matches.findByPk(matchId, { raw: true });
    console.log("matchId: ", matchId);
    if (!match) {
      return { error: "Partida não encontrado" };
    }
    if (match.homeTeamScore === -1 || match.awayTeamScore === -1) {
      return {
        error: "Pontuação de partida não definida",
      };
    }
    console.log("match: ", match);

    const guesses = await JSON.parse(
      JSON.stringify(
        await db.Guess.findAll({
          where: {
            matchId,
          },
        })
      )
    );
    await Promise.all(
      guesses.map((item: { matchId: number }) =>
        updateMatchWinners(item.matchId)
      )
    );
    const guessesUpdated = JSON.parse(
      JSON.stringify(
        await db.Guess.findAll({
          where: {
            matchId,
          },
          order: [
            ["createdAt", "ASC"], // Order by Matches' matchDate in ASCending order
          ],
          include: [
            {
              attributes: ["email", "pixKey", "permission", "pushToken"],
              model: db.Clients,
              as: "client",
            },
          ],
        })
      )
    ) as GuessMode[];
    const winners: GuessMode[] = guessesUpdated.filter(
      (item: GuessMode) => item.winnings > 0
    );

    if (winners.length === 0) {
      return { error: "nenhum palpite ganhador encontrado" };
    } else {
      return winners;
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default readAllByMatchWinner;
