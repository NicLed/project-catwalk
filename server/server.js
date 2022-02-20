const express = require('express');
const axios = require('axios');
const { TOKEN } = require('../config.js');
const requestsAPI = require('./requestsAPI');

const port = 3001;
const app = express();
const path = require('path');


// MIDDLEWARE
app.use(express.json());
app.use(express.static('dist'));


app.get('/products', (req, res) => {
  requestsAPI.getAllProducts()
    .then((result) => res.status(200).send(result.data))
    .catch((error) => {
      // throw new Error(error);
      console.log(error);
    })
});

app.get('/products/:product_id', (req, res) => {
  requestsAPI.getProductDetails(req.params.product_id)
    .then((result) => res.status(200).send(result.data))
    .catch((err) => {
      console.err(err);
      res.send(err);
    })
});


app.get('/reviews/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${req.params.product_id}&count=1000`,
  {headers: {Authorization: TOKEN}})
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((error) => {
    throw new Error(error);
  })
})

app.get('/reviews/meta/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${req.params.product_id}`,
    {headers: {Authorization: TOKEN}})
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((error) => {
    throw new Error(error);
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

