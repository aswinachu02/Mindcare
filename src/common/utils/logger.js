export const logger = {
  error: (error, loc) => console.log(`ERROR @ ${loc}: `, error),
  message: (message) => console.log(`LOG: `, message),
};
