import db from "../../../database";
import ErrorsTranslate from "../../utils/ErrorsTranslate";

async function readAll() {
  try {
    const resp = await db.Clients.findAll({
      attributes: [
        "clientId",
        "email",
        "pixKey",
        "permission",
        "pushToken",
        "CPF",
        "createdAt",
        "updatedAt",
      ],
      raw: true,
    });
    const filter = resp;
    if (filter.length === 0) {
      return { error: "nenhum cliente encontrado" };
    } else {
      return filter;
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default readAll;
