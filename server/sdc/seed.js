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

console.time('seed time');

// insert products
client.query(
  `COPY products (name, category, reviews, averageRating, liked,\
    price, shortName, longDescription, thumbImageURL, articleNumber,\
    variantProduct, variantType, variantCategory) FROM
    '/Users/javierzarate/Documents/hrr50/SDC/Javier-Main-Description/server/sdc/csvData/products.csv'DELIMITER ',' CSV HEADER;`
)
.then(() => {
  console.log('products successfully seeded!');
})
.catch(err => console.error(err));

// insert carouselImages
client.query(
  `COPY carouselImages (carouselUrl, product_id) FROM
    '/Users/javierzarate/Documents/hrr50/SDC/Javier-Main-Description/server/sdc/csvData/images.csv'DELIMITER ',' CSV HEADER;`
)
.then(() => {
  console.log('carouselImages successfully seeded!');
})
.catch(err => console.error(err));

// insert breadcrumbs
client.query(
  `COPY breadcrumbs (br1, url1, br2, url2, br3, url3, br4, url4, br5, url5,\
    br6, url6, product_id) FROM
    '/Users/javierzarate/Documents/hrr50/SDC/Javier-Main-Description/server/sdc/csvData/breadcrumbs.csv'DELIMITER ',' CSV HEADER;`
)
.then(() => {
  console.log('breadcrumbs successfully seeded!');
})
.catch(err => console.error(err));

// insert variants
client.query(
  `COPY variants (name, imageUrl, linkUrl, product_id) FROM
    '/Users/javierzarate/Documents/hrr50/SDC/Javier-Main-Description/server/sdc/csvData/variants.csv'DELIMITER ',' CSV HEADER;`
)
.then(() => {
  console.log('variants successfully seeded!');
  console.timeEnd('seed time');
  client.end();
})
.catch(err => console.error(err));