const request = require('request');
const rp = require('request-promise');
const port = '3000';

let itemApiUrl = `http://localhost:${port}/api/items/0xcdd9Ea52B8dCf2Cd99Ec9D5CD`;

let attributes = [
  ['itemID', 'string'],
  ['name', 'string'],
  ['shortName', 'string'],
  ['articleNumber', 'string'],
  ['category', 'string'],
  ['reviews', 'number'],
  ['averageRating', 'number'],
  ['carouselImages', 'object'],
  ['shortDescription', 'string'],
  ['longDescription', 'string'],
  ['thumbImageURL', 'string'],
  ['variants', 'object'],
  ['liked', 'boolean'],
  ['price', 'number'],
];

test('should respond to an api request to /api/items/:itemID', done => {
  rp({uri: itemApiUrl})
    .then( item => {
      //Check that it exists
      item = JSON.parse(item);
      expect(typeof item).toBe('object');
      
      //Check that it has all the necessary attributes and types
      attributes.forEach( attribute => {
        expect(typeof item[attribute[0]]).toBe(attribute[1]);
      });

    })
    .then( () => {
      done();
    })
    .catch( err => {
      console.log(err);
      done();
    });
});