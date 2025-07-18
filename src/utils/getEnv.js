export function getEnv(key, defaultValue = undefined) {
  const value = process.env[key];
  if (value === undefined || value === "") {
    return defaultValue;
  }
  return value;
}