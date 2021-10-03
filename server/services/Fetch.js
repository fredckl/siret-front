import _fetch from 'node-fetch';

class Fetch {
  fetch (...args) {
    return _fetch(...args);
  }

  async getJson (...args) {
    const res = await this.fetch(...args);
    return res.json();
  }

  async geText (...args) {
    const res = await this.fetch(...args);
    return res.text();
  }
}

export default Fetch;
