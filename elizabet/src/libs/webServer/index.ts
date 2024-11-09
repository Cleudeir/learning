import cors from "cors";
import express from "express";
import environment from "../../utils/Environment";
class Server {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
  }
  private middleware() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.listen(environment.get("PORT") || 4000, () => {
      console.log(
        `initial => http://localhost:${environment.get("PORT") || 4000}`
      );
    });
  }
}
export default new Server();
