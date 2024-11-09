import db from "../../../database";
import ErrorsTranslate from "../../utils/ErrorsTranslate";

async function readAll() {
  try {
    const resp = await db.Guess.findAll({
      order: [
        [{ model: db.Matches, as: "match" }, "matchDate", "ASC"], // Order by Matches' matchDate in ASCending order
      ],
      include: [
        {
          model: db.Matches,
          as: "match",
        },
        {
          attributes: ["email", "pixKey", "permission", "pushToken"],
          model: db.Clients,
          as: "client",
        },
      ],
    });
    if (resp.length === 0) {
      return { error: "nenhum palpite encontrado" };
    } else {
      return resp;
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}
export default readAll;
