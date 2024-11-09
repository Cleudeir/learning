class Gerador {
  constructor() {

  }
  async create(type) {
    try {
      const fake = await fetch(`https://geradorbrasileiro.com/api/faker/${type}`);
      const {values} = await fake.json();
      return values[0];
    } catch (e) {
      console.log(e);
    }
  }
}
export default new Gerador();
