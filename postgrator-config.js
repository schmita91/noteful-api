const { CONNECTION_STRING } = require("./src/config");

require('dotenv', { CONNECTION_STRING }).config();

module.exports = {
  migrationDirectory: 'migrations',
  driver: 'pg',
  host: CONNECTION_STRING.host,
  port: CONNECTION_STRING.port,
  dbname: CONNECTION_STRING.dbname,
  user: CONNECTION_STRING.user,
  password: CONNECTION_STRING.password,
  connectionString:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DATABASE_URL
      : process.env.DATABASE_URL,
};