import db from "../../../database";
import { Clients } from "../../../database/models/Clients";
import ErrorsTranslate from "../../utils/ErrorsTranslate";

async function remove({ query, body, headers }: any) {
  const client = query as Clients;
  const clientId = Number(client.clientId);
  try {
    const resp = await db.Clients.destroy({ where: { clientId } });
    if (resp === 1) {
      return { message: "cliente removido com sucesso" };
    } else {
      return { error: "cliente não encontrado" };
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default remove;
