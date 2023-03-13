export const alphabeticalSort = (a, b) => String(a).localeCompare(String(b));

export const numericalSort = (a, b) =>
  parseFloat(String(a)) - parseFloat(String(b));
