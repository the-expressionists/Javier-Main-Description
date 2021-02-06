const f = require('faker');

const randNum = (min, max) => f.random.number({ 'min': min, 'max': max });

const itemData = () => {
  item = {};

  // items tend to have human names
  item.name = `${f.name.firstName()} ${f.commerce.productName()}`;
  item.category = f.commerce.product();
  item.reviews = randNum(1, 5);
  item.carouselImages = imageGenerator(300, 400);
  item.averageRating = randNum(1, 5);
  item.liked = f.random.boolean();
  item.price = f.commerce.price(1999);
  item.shortName = f.commerce.productAdjective() + ' ' + item.category;
  item.longDescription = f.lorem.paragraph();
  item.breadcrumbs = breadcrumbs(item.category, item.shortName);
  item.thumbImageUrl = `https://source.unsplash.com/collection/1163637/100x100`;
  item.articleNumber = `${f.random.number(999)}.${f.random.number(999)}.${f.random.number(999)}`;

  // not all items will have variants
  // 66.6% chance of variant
  if (randNum(1, 5) <= 3) {
    item.variantProduct = true;
    item.variants = variants();
    item.variantType = f.random.arrayElement(item.variants.map( type => type.name));
  } else {
    item.variantProduct = false;
  }
  return item;
};

// will return array of 4 - 6 random images
const imageGenerator = (min, max) => {
  const imageCount = randNum(6, 9);

  let images = [];
  for (let i = 0; i < imageCount; i++) {
    const size =  `${randNum(min, max)}x${randNum(min, max)}`;
    images.push({
      imageUrl: 'https://source.unsplash.com/collection/1163637/' + size
    })
  }
  return images;
}

// will return array of
const variants = () => {
  const variantCount = randNum(4,6);

  let variants = [];

  for (let i = 0; i < variantCount; i++) {
    variants.push({
      name:  `${f.name.firstName()} ${f.commerce.productName()}`,
      imageUrl: `https://source.unsplash.com/collection/1163637/${54 + i}x${54 + 1}`,
      linkUrl: f.internet.url()
    });
  }

  return variants;
}

const breadcrumbs = (category, name) => {
  const crumbCount = randNum(3, 5);

  let breadcrumbs = [];

  for (let i = 0; i < crumbCount - 1; i++) {
    breadcrumbs.push({
      name: f.commerce.department(),
      url: f.internet.url()
    })
  }

  // final breadbrumbs lead to current item
  // start with current item category
  breadcrumbs.push({
    name: category, // String
    url: f.internet.url() //String
  });

  // add the reference for the current item
  breadcrumbs.push({
    name: name, // String
    url: f.internet.url() //String
  });

  return breadcrumbs;
}

module.exports = {
  itemData
}
