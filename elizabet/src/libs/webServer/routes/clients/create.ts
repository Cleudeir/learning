import db from "../../../database";
import { Clients } from "../../../database/models/Clients";
import ErrorsTranslate from "../../utils/ErrorsTranslate";

interface ClientModel extends Omit<Clients, "password"> {
  password?: string | undefined;
}

async function create({ query, body, headers }: any) {
  const client = body as Clients;
  console.log("client: ", client);
  try {
    const resp = JSON.parse(
      JSON.stringify(await db.Clients.create(client))
    ) as ClientModel;
    delete resp.password;
    return resp;
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default create;
