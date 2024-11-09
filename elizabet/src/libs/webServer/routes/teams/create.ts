import db from "../../../database";
import { Teams } from "../../../database/models/Teams";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function create({ query, body, headers }: any) {
  const team = body as Teams;
  try {
    const resp = await db.Teams.create(team);
    return resp;
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default create;
