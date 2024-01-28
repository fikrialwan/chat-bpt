export const messageLocalstorage = {
  key: "messages",
  get() {
    return localStorage.getItem(this.key) === null
      ? "[]"
      : localStorage.getItem(this.key);
  },
  set(value: string) {
    return localStorage.setItem(this.key, value);
  },
  remove() {
    return localStorage.removeItem(this.key);
  },
};

export const accessTokenLocalstorage = {
  key: "_access_token",
  get() {
    return localStorage.getItem(this.key) === null
      ? ""
      : localStorage.getItem(this.key);
  },
  set(value: string) {
    return localStorage.setItem(this.key, value);
  },
  remove() {
    return localStorage.removeItem(this.key);
  },
};
