// require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
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

app.listen(port, () => {
  console.log(`Main Description Server listening on port ${port}`);
});