const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./db.js');
let generateData = require('./faker/fakerGen.js');

Promise.all(
  generateData(100).map( itemProps => {
    let item = new db.Item(itemProps);
    return item.save()
  })
)
  .then( () => {
    console.log(`Mongo Database seed successful`);
  })
  .catch( err => {
    console.log(err);
  })