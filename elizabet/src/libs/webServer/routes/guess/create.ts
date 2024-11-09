import db from "../../../database";
import { Guess } from "../../../database/models/Guess";
import ErrorsTranslate from "../../utils/ErrorsTranslate";

async function create({ query, body, headers }: any) {
  const guess = body as Guess;

  try {
    const resp = JSON.parse(JSON.stringify(await db.Guess.create(guess)));
    return resp;
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default create;
