export const messageLocalstorage = {
  key: "messages",
  get() {
    return localStorage.getItem(this.key);
  },
  set(value: string) {
    return localStorage.setItem(this.key, value);
  },
};
