import db from "..";
import ErrorsTranslate from "../../webServer/utils/ErrorsTranslate";
import { Guess } from "../models/Guess";
import SequelizeParse from "./SequelizeParse";

async function updateMatchWinners(matchId: number): Promise<any> {
  try {
    const match = await db.Matches.findByPk(matchId, { raw: true });
    if (match.homeTeamScore === -1 || match.awayTeamScore === -1) {
      return {
        error: "Pontuação de partida não definida",
      };
    }
    const guesses = await db.Guess.findAll({
      where: {
        matchId,
        paymentStatus: "approved",
      },
    });
    const transformedGuesses = await SequelizeParse(guesses);

    let totalAmount = 0;
    let winnersCount = 0;
    let winners: { guessId: number; winnings: number }[] = [];
    let losers: { guessId: number; winnings: number }[] = [];
    transformedGuesses.map((item: Guess) => {
      totalAmount += item.value;
      if (
        item.homeTeamGuess === match.homeTeamScore &&
        item.awayTeamGuess === match.awayTeamScore
      ) {
        winnersCount++;
      }
    });

    transformedGuesses.forEach((item: Guess) => {
      if (
        item.homeTeamGuess === match.homeTeamScore &&
        item.awayTeamGuess === match.awayTeamScore
      ) {
        winners.push({
          ...item,
          winnings: totalAmount / winnersCount,
        });
      } else {
        losers.push({
          ...item,
          winnings: 0,
        });
      }
    });
    console.log("winners: ", winners.length);
    console.log("losers: ", losers.length);
    if (winners.length > 0) {
      await db.Guess.bulkCreate(winners, {
        updateOnDuplicate: ["guessId", "winnings"],
        logging: false,
      });
    }
    if (losers.length > 0) {
      await db.Guess.bulkCreate(losers, {
        updateOnDuplicate: ["guessId", "winnings"],
        logging: false,
      });
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default updateMatchWinners;
