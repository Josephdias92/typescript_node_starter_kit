const appConstants = {
  app: {
    isProd: process.env.NODE_ENV === "production"
  },
  db: {
  },
  logger: {
    outputPath: process.env.LOG_PATH,
  },
};
export default appConstants;
