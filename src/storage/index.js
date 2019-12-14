/* eslint-disable class-methods-use-this */
class LocalStorage {
  get(key) {
    return localStorage.getItem(key);
  }

  add(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

const storage = new LocalStorage();

export default storage;
