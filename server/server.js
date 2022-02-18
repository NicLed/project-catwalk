const express = require('express');
const axios = require('axios');
const { TOKEN } = require('../config.js');
const requestsAPI = require('./requestsAPI');

const PORT = 3000;
const app = express();
const path = require('path');

// MIDDLEWARE
app.use(express.json());
app.use(express.static('dist'));


app.get('/products', (req, res) => {
  requestsAPI.getAllProducts()
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((error) => {
    throw new Error(error);
  })
})

app.get('/reviews/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${req.params.product_id}`,
   {headers: {Authorization: config.TOKEN}})
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((error) => {
    throw new Error(error);
  })
})

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
