const { pool: db } = require('../db/db.js');

exports.getProductById = (id, cb) => {
	const prodQry = `SELECT * FROM products WHERE id=${id}`;
	const imgsQry = `SELECT * FROM carouselImages WHERE productId=${id}`;
	const brCrmQry = `SELECT * FROM breadcrumbs WHERE productId=${id}`;
	const varQry = `SELECT * FROM variants WHERE productId=${id}`;

	Promise.all([db.query(prodQry), db.query(imgsQry), db.query(brCrmQry), db.query(varQry)])
		.then((data) => {
			let res = data[0].rows;
			res[0].carouselImages = data[1].rows;
			res[0].breadcrumbs = data[2].rows;
			res[0].variants = data[3].rows;

			cb(null, res);
		})
		.catch((err) => cb(err));
};
