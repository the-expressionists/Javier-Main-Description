const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require('./db/db.js');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

const staticDir = path.join(__dirname, '..', 'client', 'dist');
app.use('/', expressStaticGzip(staticDir, {
  enableBrotli: true,
  orderPreference: ['br', 'gz']
}));

app.use(cors());
app.use((req, res, next) => {
  console.log(`Serving ${req.method} at ${req.url}`);
  const test = /\?[^]*\//.test(req.url);
  if (req.url.substr(-1) === '/' && req.url.length > 1 && !test) {
    res.redirect(301, req.url.slice(0, -1));
  } else {
    next();
  }
});

app.get('/:itemID', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'client', 'dist'));  
});

app.get('/container', (req, res) => {
  console.log('container');
  res.status(200).sendFile(path.join(__dirname, '..', 'client', 'dist', 'container.html'));
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

app.get('/api/itemDetails', (req, res) => {
  db.Item.findOne({})
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