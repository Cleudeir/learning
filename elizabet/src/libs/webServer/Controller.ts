import { PathParams } from "express-serve-static-core";
import Server from ".";
const App = Server.express;
class Controller {
  async get(path: String, _function: Function) {
    const _path = path as PathParams;
    App.get(_path, async (req: any, res: any) => {
      const { query, headers } = req;
      const result = await _function({ query, headers });
      res.send(result);
    });
  }
  async post(path: String, _function: Function) {
    const _path = path as PathParams;
    App.post(_path, async (req: any, res: any) => {
      const { query, body, headers } = req;
      const result = await _function({ query, body, headers });
      res.send(result);
    });
  }
  async put(path: String, _function: Function) {
    const _path = path as PathParams;
    App.put(_path, async (req: any, res: any) => {
      const { query, body, headers } = req;
      const result = await _function({ query, body, headers });
      res.send(result);
    });
  }
  async remove(path: String, _function: Function) {
    const _path = path as PathParams;
    App.delete(_path, async (req: any, res: any) => {
      const { query, body, headers } = req;
      const result = await _function({ query, body, headers });
      res.send(result);
    });
  }
}
export default new Controller();
