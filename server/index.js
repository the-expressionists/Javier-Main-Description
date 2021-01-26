const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const db = require('./db/db.js');

const app = express();
const port = 3000;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(cors());
app.use((req, res, next) => {
  console.log(`Serving ${req.method} at ${req.url}`);
  next();
});

app.get('/api/items', (req, res) => {
  db.Item.find({}, (msg) => {
    console.log('Finding all products...');
    return msg;
  })
    .then( msg => {
      res.status(200).send(msg);
    })
    .catch( err => {
      res.status(404).send(err);
    })
});

app.get('/api/items/:itemID', (req, res) => {
  db.Item.findOne({itemID: req.params.itemID})
    .catch( err => {
      console.log(err);
      res.status(404).send(err);
    })
    .then( item => {
      res.status(200).send(item);
    });
});

app.listen(3000, () => {
  console.log(`Main Description Server listening on port ${port}`);
});