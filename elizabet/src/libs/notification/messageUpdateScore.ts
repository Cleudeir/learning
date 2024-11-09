import pushNotification from ".";
import { Matches } from "../database/models/Matches";
import SequelizeParse from "../database/utils/SequelizeParse";
import readAllByMatch from "../webServer/routes/guess/readAllByMatch";
interface Props {
  matchId: number;
  afterUpdate: Matches;
}
export default async function messageUpdateScore({
  matchId,
  afterUpdate,
}: Props) {
  const query = { matchId };
  const allGuesses = await SequelizeParse(readAllByMatch({ query }));
  const uniqueToken = new Set();
  if (allGuesses.length > 0) {
    allGuesses.forEach((item: any) => {
      if (item.client.pushToken) uniqueToken.add(item.client.pushToken);
    });
    const filterTokens = Array.from(uniqueToken) as string[];

    const body = `
O jogo ${afterUpdate.homeTeamName} x ${afterUpdate.awayTeamName} teve seu placar definido!
Será que você acertou o palpite?
  `;
    if (filterTokens.length > 0) {
      pushNotification.send([...filterTokens, "sadadsa5555"], {
        body,
        title: "Partida definida!",
      });
    }
  }
}
