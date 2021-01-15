var faker = require('faker');

faker.locale = ('sv');

var furniture = function() {
  return {
    itemID: faker.random.number({min: 100000, max: 999999, precision: 1}), // Number(int),
    itemtype: faker.name.lastName(0), // String,
    name: faker.name.firstName(1) // String,
    // shortName: faker., // String,
    // articleNumber: faker., // String,
    // category: faker., // String,
    // reviews: faker., // Number,
    // averageRating: faker., // Number,
    // carouselImages: faker., // Array of objects {strings(url), and strings(url) for thumbnails}
    // shortDescription: faker., // String,
    // longDescription: faker., // String,
    // thumbImageURL: faker., // String,
    // variants: faker., // Array of objects {name, string(image url), string(link url)}
    // liked: faker., // boolean,
    // price: faker. // number
    // reviews: faker. // array of review objects
  }
};

var result = [];

for (var i = 0; i < 100; i++) {
  result.push(furniture());
}

writeFile( __dirname + '/faker/sampleData.json', JSON.stringify(result));