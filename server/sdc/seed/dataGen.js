const faker = require('faker');

const randNum = (min, max) => faker.random.number({ 'min': min, 'max': max });

const productData = () => {
  // items tend to have human names
  const name = `${faker.name.firstName()} ${faker.commerce.productName()}`;
  const category = faker.commerce.product();
  const reviews = randNum(1, 5);
  const averageRating = randNum(1, 5);
  const liked = faker.random.boolean();
  const price = faker.commerce.price(1999);
  const shortName = faker.commerce.productAdjective() + ' ' + category;
  const longDescription = faker.lorem.paragraph();
  const thumbImageUrl = `https://source.unsplash.com/collection/1163637/100x100`;
  const articleNumber = `${faker.random.number(999)}.${faker.random.number(999)}.${faker.random.number(999)}`;
  const variantProduct = true;
  const variantType = `${faker.name.firstName()} ${faker.commerce.productName()}`;;
  const  variantCategory = `${faker.commerce.product()}`;

  let data = `${name},${category},${reviews},${averageRating},${liked},${price},\
  ${shortName},${longDescription},${thumbImageUrl},${articleNumber}, ${variantProduct},\
  ${variantType},${variantCategory}`;

  return data;
};


const carouselImages = (id) => {
  const size =  `${randNum(300, 400)}x${randNum(300, 400)}`;
  const imageUrl = 'https://source.unsplash.com/collection/1163637/' + size;

  return `${imageUrl},${id}`;
}

const variants = (id) => {
  const name =  `${faker.name.firstName()} ${faker.commerce.productName()}`;
  const imageUrl = `https://source.unsplash.com/collection/1163637/${randNum(54, 58)}x${randNum(55, 59)}`;
  const linkUrl = faker.internet.url();


  return `${name},${imageUrl},${linkUrl},${id}`;
}

const breadcrumbs = (id) => {
  const name = faker.commerce.department();
  const url = faker.internet.url();

  return `${name},${url},${id}`;
}

module.exports = {
  productData,
  carouselImages,
  variants,
  breadcrumbs
}
