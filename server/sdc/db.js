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

const getItems = (request, response) => {
  const id = parseInt(request.params.id)

  client.query('SELECT * FROM items WHERE product_id < 10', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getItems,
  client
};
