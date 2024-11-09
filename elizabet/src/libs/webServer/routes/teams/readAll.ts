import db from "../../../database";
import ErrorsTranslate from "../../utils/ErrorsTranslate";
async function readAll() {
  try {
    const resp = await db.Teams.findAll();
    if (resp.length === 0) {
      return { error: "nenhum cliente encontrado" };
    } else {
      return resp;
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}
export default readAll;
