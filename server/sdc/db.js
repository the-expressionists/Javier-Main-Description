const { HOST, USER, PASSWORD, DB, PORT } = require('./db.config');
const { Client } = require('pg');

const client = new Client({
  user: USER,
  host: HOST,
  database: DB,
  password: PASSWORD,
  port: PORT,
});

client.connect((err) => {
  err ? console.error(err) :
    console.log('Connected to DB!')
});

module.exports = {
  client
};
