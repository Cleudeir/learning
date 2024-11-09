import db from "../../../database";
import { Clients } from "../../../database/models/Clients";
import ErrorsTranslate from "../../utils/ErrorsTranslate";

async function update({ query, body, headers }: any) {
  const client = body as Clients;
  const clientId = client.clientId;
  console.log("client: ", client);
  try {
    if (clientId == null) {
      return { errors: "clientId não existe" };
    }
    const resp = await db.Clients.update(client, { where: { clientId } });
    console.log("resp: ", resp);
    if (resp.includes(1)) {
      const resp = await db.Clients.findByPk(clientId, {
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
      return resp;
    } else {
      return { errors: "clientId não encontrado" };
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default update;
