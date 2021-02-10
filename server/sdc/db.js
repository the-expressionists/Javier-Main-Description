const { HOST, USER, PASSWORD, DB, PORT } = require('./db.config');
const { Pool } = require('pg');

const pool = new Pool({
  user: USER,
  host: HOST,
  database: DB,
  password: PASSWORD,
  port: PORT,
});

pool.connect((err) => {
  err ? console.error(err) :
    console.log('Connected to DB!')
});

module.exports = {
  pool
};
