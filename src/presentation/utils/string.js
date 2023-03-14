export const capitalize = (word) => {
  word = String(word);
  return String(word[0]).toUpperCase() + String(word).slice(1);
};
