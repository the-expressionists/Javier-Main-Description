const axios = require('axios');
const ports = {
  localhost: 'localhost',
  aws : '3.129.200.191'
}

//Select which port to use
const PORT = ports.localhost;

module.exports.getID = () => {
  let idElement = document.getElementById('main').attributes.itemid;
  if (idElement = undefined) {
    console.log("NO ID")
    return 'no id';
  }
  return document.getElementById('main').attributes.itemid.value;
};

/*-------------------------- sdc routes -----------------------------*/

const getRand = (min, max) => Math.floor(Math.random() * (max - min) + min);

module.exports.findOne = (callback) => {
  axios.get(`http://${PORT}:3000/api/product/${getRand(1, 10000000)}`)
    .then(function ({data}) {
      callback(data[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports.findByID = (itemID, callback) => {
axios.get(`http://${PORT}:3000/api/product/${itemID}`)
  .then(function ({data}) {
    callback(data);
  })
  .catch(function (error) {
    console.log(error);
  });
};