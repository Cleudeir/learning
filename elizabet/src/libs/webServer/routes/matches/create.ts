import db from "../../../database";
import { Matches } from "../../../database/models/Matches";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
interface ClientMode extends Omit<Matches, "homeTeamScore" | "awayTeamScore"> {
  homeTeamScore?: number | undefined;
  awayTeamScore?: number | undefined;
}
async function create({ query, body, headers }: any) {
  const match = body as Matches;
  try {
    const resp = JSON.parse(
      JSON.stringify(await db.Matches.create(match))
    ) as ClientMode;
    delete resp.homeTeamScore;
    delete resp.awayTeamScore;
    return resp;
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default create;
