import { Sequelize } from "sequelize";
import Environment from "../../utils/Environment";
import { initModels } from "./models/init-models";

class SequelizeDb {
  private sequelize: any;

  public constructor() {
    this.sequelize = new Sequelize(
      String(Environment.get("DATABASE_DB")),
      String(Environment.get("USER_DB")),
      String(Environment.get("PASSWORD_DB")),
      {
        dialect: "mysql",
        host: String(Environment.get("HOST_DB")),
        port: Number(Environment.get("PORT_DB")),
      }
    );
  }
  public init() {
    const initial = initModels(this.sequelize);
    const force = false;
    initial.Championships.sync({ force });
    initial.Categories.sync({ force });
    initial.Teams.sync({ force });
    initial.Clients.sync({ force });
    initial.Matches.sync({ force });
    initial.Guess.sync({ force });
    return initial;
  }
}
export default new SequelizeDb().init();
