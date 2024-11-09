import type { Sequelize } from "sequelize";
import type {
  CategoriesAttributes,
  CategoriesCreationAttributes,
} from "./Categories";
import { Categories as _Categories } from "./Categories";
import type {
  ChampionshipsAttributes,
  ChampionshipsCreationAttributes,
} from "./Championships";
import { Championships as _Championships } from "./Championships";
import type { ClientsAttributes } from "./Clients";
import { Clients as _Clients } from "./Clients";
import type { GuessAttributes, GuessCreationAttributes } from "./Guess";
import { Guess as _Guess } from "./Guess";
import type { MatchesAttributes } from "./Matches";
import { Matches as _Matches } from "./Matches";
import type { TeamsAttributes, TeamsCreationAttributes } from "./Teams";
import { Teams as _Teams } from "./Teams";

export {
  _Categories as Categories,
  _Championships as Championships,
  _Clients as Clients,
  _Guess as Guess,
  _Matches as Matches,
  _Teams as Teams,
};

export type {
  CategoriesAttributes,
  CategoriesCreationAttributes,
  ChampionshipsAttributes,
  ChampionshipsCreationAttributes,
  ClientsAttributes,
  GuessAttributes,
  GuessCreationAttributes,
  MatchesAttributes,
  TeamsAttributes,
  TeamsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Championships = _Championships.initModel(sequelize);
  const Categories = _Categories.initModel(sequelize);
  const Clients = _Clients.initModel(sequelize);
  const Matches = _Matches.initModel(sequelize);
  const Guess = _Guess.initModel(sequelize);
  const Teams = _Teams.initModel(sequelize);

  Guess.belongsTo(Clients, { as: "client", foreignKey: "clientId" });
  Clients.hasMany(Guess, { as: "Guess", foreignKey: "clientId" });
  Guess.belongsTo(Matches, { as: "match", foreignKey: "matchId" });
  Matches.hasMany(Guess, { as: "Guess", foreignKey: "matchId" });

  return {
    Championships: Championships,
    Categories: Categories,
    Clients: Clients,
    Matches: Matches,
    Guess: Guess,
    Teams: Teams,
  };
}
