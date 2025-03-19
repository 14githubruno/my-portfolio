function getBaseUrl(): string {
  return process.env.BASE_URL || "http://localhost:3000";
}

export { getBaseUrl };
