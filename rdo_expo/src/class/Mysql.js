import {BACK_URL} from '../../env';

BACK_URL;

class Mysql {
  async insert(tableName, params, updateOnDuplicate) {
    console.log({tableName, params, updateOnDuplicate});
    try {
      const resp = await fetch(`${BACK_URL}/db/insert`,
          {
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({tableName, params, updateOnDuplicate}),
          },
      );
      const db = await resp.json();
      return db;
    } catch (e) {
      return {sqlMessage: e.message};
    }
  }
  async update(tableName, params, item, value) {
    try {
      const resp = await fetch(`${BACK_URL}/db/update`,
          {
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({tableName, params, item, value}),
          },
      );
      const db = await resp.json();
      return db;
    } catch (e) {
      return {sqlMessage: e.message};
    }
  }
  async destroy(tableName, item, value) {
    try {
      const resp = await fetch(`${BACK_URL}/db/destroy`,
          {
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({tableName, item, value}),
          },
      );
      const db = await resp.json();
      return db;
    } catch (e) {
      return {sqlMessage: e.message};
    }
  }
  async read(tableName, item, value) {
    try {
      const resp = await fetch(`${BACK_URL}/db/read`,
          {
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({tableName, item, value}),
          },
      );
      const db = await resp.json();
      return db;
    } catch (e) {
      console.log({sqlMessage: e.message});
      return {sqlMessage: e.message};
    }
  }
  async readAllIncludes(tableName, tableIncrement, attributes) {
    try {
      const resp = await fetch(`${BACK_URL}/db/readAllIncludes`,
          {
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({tableName, tableIncrement, attributes}),
          },
      );
      const db = await resp.json();
      return db;
    } catch (e) {
      console.log({sqlMessage: e.message});
      return {sqlMessage: e.message};
    }
  }
  async readPKIncludes(tableName, itemPK, tableIncrement) {
    try {
      const resp = await fetch(`${BACK_URL}/db/readPKincludes`,
          {
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({tableName, itemPK, tableIncrement}),
          },
      );
      const db = await resp.json();
      return db;
    } catch (e) {
      console.log({sqlMessage: e.message});
      return {sqlMessage: e.message};
    }
  }
}
export default new Mysql();
