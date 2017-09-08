module.exports = {
  port: process.env.APP_PORT || 3000,
  db: {
    database: process.env.DATABASE_NAME || 'tracker',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    options: {
      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT || 8889,
      dialect: process.env.DATABASE_DIALECT || 'mysql',
    },
  },
};
