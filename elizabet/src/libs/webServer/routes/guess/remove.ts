import db from "../../../database";
import { Guess } from "../../../database/models/Guess";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function remove({ query, body, headers }: any) {
  const guess = query as Guess;
  const guessId = Number(guess.guessId);
  try {
    const resp = await db.Guess.destroy({ where: { guessId: guessId } });
    if (resp === 1) {
      return { message: "Palpite removido com sucesso" };
    } else {
      return { error: "Palpite não encontrado" };
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default remove;
