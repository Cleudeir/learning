import db from "../../../database";
import { Clients } from "../../../database/models/Clients";
import pushNotification from "../../../notification";
import ErrorsTranslate from "../../utils/ErrorsTranslate";

interface ClientMode extends Omit<Clients, "password"> {
  password?: string | undefined;
}

async function readByEmail({ query, body, headers }: any) {
  const client = body as Clients;
  console.log("client: ", client);
  if (!client.email || !client.password || !client.pushToken) {
    return {
      error:
        "Faltando envido de algum atributo 'email','password' or 'pushToken'",
    };
  }
  try {
    const resp = (await db.Clients.findOne({
      where: { email: client.email },
      raw: true,
    })) as ClientMode;
    if (resp == null) {
      return { error: "Email não encontrado" };
    }
    if (resp.password === client.password) {
      console.log(
        "resp.password === client.password: ",
        resp.password === client.password
      );
      if (resp.pushToken != client.pushToken) {
        await db.Clients.update(client, {
          where: { clientId: resp.clientId },
        });
      }
      delete resp?.password;
      pushNotification.send([client.pushToken], {
        body: "Seja Bem vindo",
        title: "Hello",
      });
      return resp;
    } else {
      return { error: "senha incorreta" };
    }
  } catch (error: any) {
    return ErrorsTranslate(error);
  }
}

export default readByEmail;
