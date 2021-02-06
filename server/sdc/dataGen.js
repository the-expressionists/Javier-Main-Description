const faker = require('faker');

const randNum = (min, max) => faker.random.number({ 'min': min, 'max': max });

const productData = () => {
  // items tend to have human names
  const name = `${faker.name.firstName()} ${faker.commerce.productName()}`;
  const category = faker.commerce.product();
  const reviews = randNum(1, 5);
  //carouselImages = imageGenerator(300, 400);
  const averageRating = randNum(1, 5);
  const liked = faker.random.boolean();
  const price = faker.commerce.price(1999);
  const shortName = faker.commerce.productAdjective() + ' ' + category;
  const longDescription = faker.lorem.paragraph();
  //breadcrumbs = breadcrumbs(category, shortName);
  const thumbImageUrl = `https://source.unsplash.com/collection/1163637/100x100`;
  const articleNumber = `${faker.random.number(999)}.${faker.random.number(999)}.${faker.random.number(999)}`;
  let variantProduct = false;
  let variantType = null;
  let  variantCategory = null;
  // not all items will have variants
  // 66.6% chance of variant

  let data = `${name},${category},${reviews},${averageRating},${liked},${price},\
  ${shortName},${longDescription},${thumbImageUrl},${articleNumber},`;

  if (randNum(1, 5) <= 3) {
    variantProduct = true;
    //variants = variants();
    //variantType = faker.random.arrayElement(variants.map( type => type.name));
    variantType = `${faker.name.firstName()} ${faker.commerce.productName()}`;
    variantCategory = faker.commerce.product();
    return data += `${variantProduct},${variantType},${variantCategory}`;
  }
  return data += `${variantProduct},${variantType},${variantCategory}`;
};


const carouselImages = () => {
  const size =  `${randNum(300, 400)}x${randNum(300, 400)}`;
  const imageUrl = 'https://source.unsplash.com/collection/1163637/' + size;
  const product_id = randNum(1, 1000);

  return `${imageUrl},${product_id}`;
}

const variants = () => {
  const name =  `${faker.name.firstName()} ${faker.commerce.productName()}`;
  const imageUrl = `https://source.unsplash.com/collection/1163637/${randNum(54, 58)}x${randNum(55, 59)}`;
  const linkUrl = faker.internet.url();
  const product_id = randNum(1, 1000);

  return `${name},${imageUrl},${linkUrl},${product_id}`;
}

const breadcrumbs = (max) => {
  let data = ``;
  const product_id = randNum(1, 1000);

  for (let i = 0; i < 6; i++) {
    let name = faker.commerce.department();
    let url = faker.internet.url();
      data += `${name},${url},`;
  }
  data += `${product_id}`;

  return data;
}

module.exports = {
  productData,
  carouselImages,
  variants,
  breadcrumbs
}
