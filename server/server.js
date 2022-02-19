const express = require('express');
const app = express();
const port = 3000;
const config = require('../config.js');
const axios = require('axios');

app.use(express.static('dist'));

//'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products?count=all'
app.get('/products/:product_id', (req, res) => {
  console.log(req.params.product_id)
  const id = Number(req.params.product_id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`,
   {headers: {Authorization: config.TOKEN}})
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((error) => {
    throw new Error(error);
  })
})

app.get('/API/reviews/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${req.params.product_id}`,
   {headers: {Authorization: config.TOKEN}})
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((error) => {
    throw new Error(error);
  })
})
// !!
app.get('/related/:product_id', (req, res) => {
  const id = Number(req.params.product_id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/related`,
   {headers: {Authorization: config.TOKEN}})
  .then((response) => {
    res.status(200).send(response.data)
  })
  .catch((error) => {
    throw new Error(error);
  })
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
