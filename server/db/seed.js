const mongoose = require('mongoose');
const db = require('./db.js');
let generateData = require('./faker/fakerGen.js');

db.Item.deleteMany({}, () => {
  console.log('Emptied Items successful');
})
  .then( () => {
    return Promise.all(
      generateData(100).map( itemProps => {
        let item = new db.Item(itemProps);
        return item.save()
      })
    );
  })
  .catch( err => {
    console.log('Error generating data: ' + err);
  })
  .then( () => {
    console.log(`Mongo Database seed successful`);
    return mongoose.disconnect()
  })
  .catch( err => {
    console.log(err);
  })