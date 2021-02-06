const { itemData } = require('./dataGen.js');
const { pool } = require('./db.js');

const seed = () => {
  let itemCount = 0;
  for (let i = 1; i <= 100; i++) {

    // prodcut data
    const item = itemData();

    // seed item table
    pool.query(`INSERT INTO items (name, category, reviews, averageRating, liked,\
      price, shortName, longDescription, thumbImageURL, articleNumber,\
      variantProduct, variantType, variantCategory) VALUES ($1, $2, $3, $4, $5,\
      $6, $7, $8, $9, $10, $11, $12, $13);`,
      [item.name, item.category, item.reviews, item.averageRating, item.liked,
      item.price, item.shortName, item.longDescription, item.thumbImageUrl,
      item.articleNumber, item.variantProduct, item.variantType, item.variantCategory],
      (err, res) => {
        err ? console.error(err) :
        // seed carouselImages table
        carouselImages(item.carouselImages, i);
        breadcrumbs(item.breadcrumbs, i);

        // not all products have variants
        if (item.variantProduct) {
          variants(item.variants, i)
        }
        itemCount++;
        console.log(`items: ${itemCount}`);
      });
  }
};

const carouselImages = (images, item_id) => {
  let queryStr = `INSERT INTO carouselImages (carouselUrl, item_id) VALUES `;
  let values = [];
  let index = 0;
  for (let i = 1; i <= images.length * 2; i+=2) {
    queryStr += `($${i}, $${i + 1}),`
    values.push(images[index].imageUrl);
    values.push(item_id);
    index++;
  }
  queryStr = queryStr.slice(0,-1);

  pool.query(queryStr, values, (err, res) => {
    err ? console.error(err) :
      null;
  });
};

const breadcrumbs = (bc, item_id) => {
  let queryStr = `INSERT INTO breadcrumbs (name, url, item_id) VALUES `;
  let values = [];
  let index = 0;
  for (let i = 1; i <= bc.length * 3; i+=3) {
    queryStr += `($${i}, $${i + 1}, $${i + 2}),`
    values.push(bc[index].name);
    values.push(bc[index].url);
    values.push(item_id);
    index++;
  }
  queryStr = queryStr.slice(0,-1);
  pool.query(queryStr, values, (err, res) => {
    err ? console.error(err) :
      null;
  });
};

const variants = (v, item_id) => {
  let queryStr = `INSERT INTO variants (name, imageUrl, linkUrl, item_id) VALUES `;
  let values = [];
  let index = 0;
  for (let i = 1; i <= v.length * 4; i+=4) {
    queryStr += `($${i}, $${i + 1}, $${i + 2}, $${i + 3}),`
    values.push(v[index].name);
    values.push(v[index].imageUrl);
    values.push(v[index].linkUrl);
    values.push(item_id);
    index++;
  }
  queryStr = queryStr.slice(0,-1);
  pool.query(queryStr, values, (err, res) => {
    err ? console.error(err) :
      null;
  });
};

seed();
// // pool.end().then(() => console.log('pool has ended'))