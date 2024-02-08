export const validateExpiration = (expirationTimeSeconds: number) =>
  expirationTimeSeconds > Date.now() / 1000;
