const fs = require('fs');
let generateData = require('./faker/fakerGen.js');

fs.writeFile(__dirname + '/../server/db/sampleData.json', JSON.stringify(generateData(100)), (err) => {
  if (err) throw err;
  console.log('Sample data has been generated.');
});
