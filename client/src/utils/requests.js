const axios = require('axios');
const ports = {
  localhost: 'localhost',
  aws : '3.129.200.191'
}

//Select which port to use
const port = ports.localhost;

module.exports.findOne = (callback) => {
    axios.get(`http://${port}:3000/api/itemDetails`)
      .then(function ({data}) {
        callback(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

module.exports.findByID = (itemID, callback) => {
  axios.get(`http://${port}:3000/${itemID}`)
    .then(function ({data}) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports.getID = () => {
  let idElement = document.getElementById('main').attributes.itemid;
  if (idElement = undefined) {
    console.log("NO ID")
    return 'no id';
  }
  console.log('ID')
  return document.getElementById('main').attributes.itemid.value;
};