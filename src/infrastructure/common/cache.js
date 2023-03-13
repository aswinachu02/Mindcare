const CACHE = {
  checkItem: (key) => (localStorage.getItem(key) ? true : false),
  getItem: (key) => JSON.parse(localStorage.getItem(key) ?? "{}"),
  setItem: (data) =>
    Object.keys(data).forEach((key) =>
      localStorage?.setItem(key, JSON.stringify(data[key]))
    ),
  removeItem: (key) => localStorage?.removeItem(key),
  clear: () => localStorage?.clear(),
};

export { CACHE };
