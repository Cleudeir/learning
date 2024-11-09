import fetch from 'node-fetch';
import crypto from 'crypto';

const API_ENDPOINT = process.env.API_ENDPOINT || 'https://example.com/api';
const API_KEY = process.env.API_KEY;

class LocalStorage {
  constructor(name) {
    this.data = null;
    this.loadData();
    this.name = name;
  }

  loadData() {
    try {
      const encryptedData = localStorage.getItem(this.name);
      const decipher = crypto.createDecipher('aes-256-cbc', API_KEY);
      const decryptedData = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
      this.data = JSON.parse(decryptedData.toString());
    } catch (err) {
      // ignore errors and treat as an empty storage
    }
  }

  saveData() {
    if (this.data) {
      const cipher = crypto.createCipher('aes-256-cbc', API_KEY);
      const encryptedData = Buffer.concat([cipher.update(JSON.stringify(this.data)), cipher.final()]);
      localStorage.setItem(this.name, encryptedData);
    }
  }

  set(key, value) {
    this.data = this.data || {};
    this.data[key] = value;
    this.saveData();
  }

  get(key) {
    return this.data && this.data[key];
  }

  remove() {
    localStorage.removeItem(this.name);
  }
}

async function tryRequest() {
  const storage = new LocalStorage();
  const data = storage.get(this.name);
  if (data) {
    try {
      const response = await fetch(`${API_ENDPOINT}?data=${encodeURIComponent(data)}`, {
        headers: { 'X-API-Key': API_KEY }
      });

      if (response.ok) {
        console.log('Request successful');
        storage.remove();
        return true;
      }
    } catch (err) {
      console.error(`Error during request: ${err.message}`);
    }
  }

  // either no data in storage or request failed, try again
  const newData = generateData();
  storage.set(this.name, newData);
  console.log(`Generated new data: ${newData}`);
  return false;
}

function generateData() {
  return crypto.randomBytes(16).toString('hex');
}

export default tryRequest;
