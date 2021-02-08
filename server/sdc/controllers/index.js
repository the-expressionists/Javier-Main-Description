const { client: db } = require('../db.js');

exports.getProductById = (id, cb) => {
  const prodQry = `SELECT * FROM products WHERE id=${id}`;
  db.query(prodQry, (err, res) => {
    err ? cb(err) : cb(null, res.rows)
  })
};

exports.getImagesById = (id, cb) => {
  const prodQry = `SELECT * FROM carouselImages WHERE id=${id}`;
  db.query(prodQry, (err, res) => {
    err ? cb(err) : cb(null, res.rows)
  })
};

exports.getBreadcrumbsById = (id, cb) => {
  const prodQry = `SELECT * FROM breadcrumbs WHERE id=${id}`;
  db.query(prodQry, (err, res) => {
    err ? cb(err) : cb(null, res.rows)
  })
};

exports.getVariantsById = (id, cb) => {
  const prodQry = `SELECT * FROM variants WHERE id=${id}`;
  db.query(prodQry, (err, res) => {
    err ? cb(err) : cb(null, res.rows)
  })
};
