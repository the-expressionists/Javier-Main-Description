const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
const { getProductById, getImagesById, getBreadcrumbsById, getVariantsById } = require('./sdc/controllers');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.get('/api/product/:itemID', (req, res) => {
  getProductById(req.params.itemID, (err, data) => {
    err ? res.send(err).status(400) :
      res.json(data).status(200);
  })
});

app.get('/api/images/:itemID', (req, res) => {
  getImagesById(req.params.itemID, (err, data) => {
    err ? res.send(err).status(400) :
      res.json(data).status(200);
  })
});

app.get('/api/breadcrumbs/:itemID', (req, res) => {
  getBreadcrumbsById(req.params.itemID, (err, data) => {
    err ? res.send(err).status(400) :
      res.json(data).status(200);
  })
});

app.get('/api/variants/:itemID', (req, res) => {
  getVariantsById(req.params.itemID, (err, data) => {
    err ? res.send(err).status(400) :
      res.json(data).status(200);
  })
});



app.listen(port, () => {
  console.log(`Main Description Server listening on port ${port}`);
});