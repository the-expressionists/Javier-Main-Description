const mongoose = require('mongoose');
const db = require('./db.js');
let generateFakes  = require('./faker/fakerGen.js');

db.Item.deleteMany({}, () => {
  console.log('Emptied Items successful');
})
  .catch( err => {
    console.log('Error deleting items: ' + err);
  })
  .then( () => {
    return Promise.all(
      generateFakes(100).map( itemProps => {
        let item = new db.Item(itemProps);
        return item.save()
      })
    );
  })
  .then( () => {
    console.log(`Mongo Database seed successful`);
    return mongoose.disconnect()
  })
  .catch( err => {
    console.log('Error generating data: ' + err);
  });