const { client } = require('./db.js');

console.time('total seed time');
console.time('product seed time');
// insert products
client.query(
  `COPY products (name, category, reviews, averageRating, liked,\
    price, shortName, longDescription, thumbImageURL, articleNumber,\
    variantProduct, variantType, variantCategory) FROM
    '/Users/javierzarate/Documents/hrr50/SDC/Javier-Main-Description/server/sdc/csvData/products.csv'DELIMITER ',' CSV HEADER;`
)
.then(() => {
  console.timeEnd('product seed time');
  console.log('\n');
  console.time('carouselImages seed time');
})
.catch(err => console.error(err));

// insert carouselImages
client.query(
  `COPY carouselImages (carouselUrl, product_id) FROM
    '/Users/javierzarate/Documents/hrr50/SDC/Javier-Main-Description/server/sdc/csvData/images.csv'DELIMITER ',' CSV HEADER;`
)
.then(() => {
  console.timeEnd('carouselImages seed time');
  console.log('\n');
  console.time('breadcrumbs seed time')
})
.catch(err => console.error(err));

// insert breadcrumbs
client.query(
  `COPY breadcrumbs (br1, url1, br2, url2, br3, url3, br4, url4, br5, url5,\
    br6, url6, product_id) FROM
    '/Users/javierzarate/Documents/hrr50/SDC/Javier-Main-Description/server/sdc/csvData/breadcrumbs.csv'DELIMITER ',' CSV HEADER;`
)
.then(() => {
  console.timeEnd('breadcrumbs seed time');
  console.log('\n');
  console.time('variants seed time');
})
.catch(err => console.error(err));

// insert variants
client.query(
  `COPY variants (name, imageUrl, linkUrl, product_id) FROM
    '/Users/javierzarate/Documents/hrr50/SDC/Javier-Main-Description/server/sdc/csvData/variants.csv'DELIMITER ',' CSV HEADER;`
)
.then(() => {
  console.timeEnd('variants seed time');
  console.log('DB successfully seeded!\n');
  console.timeEnd('total seed time');
  client.end();
})
.catch(err => console.error(err));