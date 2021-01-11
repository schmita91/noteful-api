const { CONNECTION_STRING } = require("./src/config");

require('dotenv', { CONNECTION_STRING }).config();

module.exports = {
  migrationDirectory: 'migrations',
  driver: 'pg',
  host: CONNECTION_STRING[host].val,
  port: CONNECTION_STRING[port].val,
  dbname: CONNECTION_STRING[dbname].val,
  user: CONNECTION_STRING[user].val,
  password: CONNECTION_STRING[password].val,
  connectionString:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DATABASE_URL
      : process.env.DATABASE_URL,
};