const { client: db } = require('./db.js');
const path = require('path');

console.time('total seed time');
console.time('product seed time');
// insert products
db.query(
  `COPY products (name, category, reviews, averageRating, liked,\
    price, shortName, longDescription, thumbImageURL, articleNumber,\
    variantProduct, variantType, variantCategory) FROM
    '${path.resolve(__dirname + '/csvData/products.csv')}'DELIMITER ',' CSV;`
)
.then(() => {
  console.timeEnd('product seed time');
  console.log('\n');
  console.time('carouselImages seed time');
})
.catch(err => console.error(err));

// insert carouselImages
db.query(
  `COPY carouselImages (carouselUrl, productId) FROM
    '${path.resolve(__dirname + '/csvData/images.csv')}'DELIMITER ',' CSV;`
)
.then(() => {
  console.timeEnd('carouselImages seed time');
  console.log('\n');
  console.time('breadcrumbs seed time')
})
.catch(err => console.error(err));

// insert breadcrumbs
db.query(
  `COPY breadcrumbs (name, url, productId) FROM
    '${path.resolve(__dirname + '/csvData/breadcrumbs.csv')}'DELIMITER ',' CSV;`
)
.then(() => {
  console.timeEnd('breadcrumbs seed time');
  console.log('\n');
  console.time('variants seed time');
})
.catch(err => console.error(err));

// insert variants
db.query(
  `COPY variants (name, imageUrl, linkUrl, productId) FROM
    '${path.resolve(__dirname + '/csvData/variants.csv')}'DELIMITER ',' CSV;`
)
.then(() => {
  console.timeEnd('variants seed time');
  console.log('DB successfully seeded!\n');
  console.timeEnd('total seed time');
  db.end();
})
.catch(err => console.error(err));
