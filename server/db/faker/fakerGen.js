let faker = require('faker');


let generateFakes = function(n) {
  let items = [];

  //Add all English items
  for (let i = 0; i < n; i++) {
    items.push(americana());
  }
  
  //Add all Swedish items
  faker.locale = ('sv');
  
  items.forEach( item => {
    item.name = faker.name.firstName(1); // String,
    item.variants = variants();
    item.shortName = item.shortName + ' ' + item.name;
  });

  return items;
}

let americana = function() {
  return {
    itemID: faker.random.alphaNumeric(25), // Number(int),
    shortName: faker.commerce.productAdjective(), // String
    articleNumber: (
        faker.random.number(999) + '.' +
        faker.random.number(999) + '.' +
        faker.random.number(999)
      ), // String
    category: faker.commerce.department(), // String
    reviews: faker.random.number(9999), // Number
    averageRating: averageRating(), // Number
    carouselImages: carouselImages(), // Array of objects {strings(url), and strings(url) for thumbnails}
    shortDescription: faker.commerce.productName(), // String
    longDescription: (faker.commerce.productDescription() + '. ' + faker.lorem.paragraph()), // String
    thumbImageURL: 'https://source.unsplash.com/collection/1163637/100x100', // String
    liked: faker.random.boolean(), // boolean
    price: faker.random.number(1999), // number        
   };
};

let variants = function() {
  if (Math.random() > .5) {
    let length = Math.floor(Math.random() * 6 + 1);
    let variants = [];
    for (let i = 0; i < length; i++) {
      variants.push({
        name: faker.name.firstName(0),
        imageUrl: 'https://source.unsplash.com/collection/1163637/54x54',
        linkUrl: faker.internet.url()
      });
    }

    return variants;
  }
  return [];
}

let carouselImages = function() {
  let length = Math.floor(Math.random() * 11 + 1);
  let images = [];
  for (let i = 0; i < length; i++) {
    images.push({
      name: faker.name.firstName(0),
      imageUrl: 'https://source.unsplash.com/collection/1163637/400x400',
    });
  }

  return images;
}

let averageRating = () => (Math.floor((Math.random() * 5) + 1));

module.exports = generateFakes;