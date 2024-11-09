/* eslint-disable import/no-anonymous-default-export */
import { Sequelize } from "sequelize";
import { initModels } from "./init-models";



export async function initDb() {
  const sequelize = new Sequelize(
    String(process.env.DATABASE_DB),
    String(process.env.USER_DB),
    String(process.env.PASSWORD_DB),
    {
      dialect: "mariadb",
      host: String(process.env.HOST_DB),
      port: Number(process.env.PORT_DB),
    }
  );

  const tables = initModels(sequelize);
  const force = false;

  await tables.EMPRESAS.sync({ force });
  await tables.OBRAS.sync({ force });
  await tables.FUNCAO.sync({ force });
  await tables.FUNCIONARIOS.sync({ force });
  await tables.CATEGORIA.sync({ force });
  await tables.EQUIPAMENTOS.sync({ force });
  await tables.OBRAS_EMPRESAS.sync({ force });
  await tables.FRENTES.sync({ force });
  await tables.RDO_FUNCIONARIOS.sync({ force });
  await tables.RDO_EQUIPAMENTOS.sync({ force });
  await tables.USUARIOS.sync({ force });
  await tables.USUARIOS_OBRAS.sync({ force });
  return tables
}


export class Db {
  constructor(tables) {
    this.tables = tables;
  }
  
  async insert(tableName, params, updateOnDuplicate) {
    let data = {};
    if (params.length === 0) {
      return { Error: "Params []" };
    }
    if (params.length > 0) {
      if (updateOnDuplicate != undefined && updateOnDuplicate.length > 0) {
        data = await this.tables[tableName].bulkCreate(params, {
          ignoreDuplicates: true,
          updateOnDuplicate,
          logging: false,
        });
      } else {
        data = await this.tables[tableName].bulkCreate(params, {
          ignoreDuplicates: true,
          logging: false,
        });
      }
    } else {
      data = await this.tables[tableName].create(params);
    }
    return data;
  }

  async destroy(tableName, item, value) {
    let data = {};

    data = await this.tables[tableName].destroy({
      where: {
        [item]: value,
      },
    });

    return data;
  }

  async read(tableName, item, value) {
    let data = {};
    const limit = 1000;
    if (!item && !value) {
      data = await this.tables[tableName].findAll({
        limit,
      });
    } else {
      data = await this.tables[tableName].findAll({
        limit,
        where: {
          [item]: value,
        },
      });
    }

    return data;
  }
  async readAllIncludes(tableName, tableIncrement, attributes) {
    let data = {};
    const limit = 1000;
    if (attributes && attributes.length > 0) {
      data = await this.tables[tableName].findAll({
        limit,
        include: [
          {
            model: this.tables[tableIncrement],
            as: tableIncrement,
            attributes,
            raw: true,
          },
        ],
      });
    } else {
      data = await this.tables[tableName].findAll({
        limit,
        include: [
          {
            model: this.tables[tableIncrement],
            as: tableIncrement,
            raw: true,
          },
        ],
      });
    }

    return data;
  }
  async update(tableName, params, item, value) {
    const data = await this.tables[tableName].update(params, {
      where: {
        [item]: value,
      },
    });
    return data;
  }
  async readPKincludes(tableName, itemPK, tableIncrement) {
    let data = {};
    const limit = 1000;
    console.log({ tableName, itemPK, tableIncrement });
    data = await this.tables[tableName].findByPk(itemPK, {
      include: [
        {
          model: this.tables[tableIncrement],
          as: tableIncrement,
        },
      ],
    });

    return data;
  }
}