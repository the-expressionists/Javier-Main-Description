const { HOST, USER, PASSWORD, DB, PORT } = require('./db.config');

const Pool = require('pg').Pool
const pool = new Pool({
  user: USER,
  host: HOST,
  database: DB,
  password: PASSWORD,
  port: PORT,
});

const getItems = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM items', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getItems,
  pool
};
