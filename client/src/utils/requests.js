const axios = require('axios');
// import { Module } from 'webpack';

module.exports.findOne = () => {
    axios.get('http://localhost:3000/api/items/')
      .then(function ({data}) {
        return data[0];
      })
      .catch(function (error) {
        console.log(error);
      });
  };