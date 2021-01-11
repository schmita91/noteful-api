const { CONNECTION_STRING } = require('./config')

const knex = require('knex')({
    client: 'pg',
    version: '6.14.8',
    connection: CONNECTION_STRING,
});

const app = require('./app'),
  { PORT, DATABASE_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
});

app.set('db', db);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);