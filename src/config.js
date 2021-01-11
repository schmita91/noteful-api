module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL:
    process.env.DATABASE_URL || 'postgresql://postgres@localhost/noteful',
  API_TOKEN: process.env.API_TOKEN,
  CONNECTION_STRING: process.env.CONNECTION_STRING
};