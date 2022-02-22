const express = require('express');
const app = express();
const port = 3000;
const config = require('../config.js');
const axios = require('axios');

app.use(express.static('dist'));

app.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products?count=all',
   {headers: {Authorization: config.TOKEN}})
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

app.get('/qa/questions', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=37311',
  {headers: {Authorization: config.TOKEN}})
  .then((response) => {
    res.status(201).send(response.data)
    console.log('response:', response.data)
  })
  .catch((err) => {
    console.error(err);
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
