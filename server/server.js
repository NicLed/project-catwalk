const express = require('express');
const app = express();
const port = 3000;
const config = require('../config.js');
const axios = require('axios');
const averageRating = require('./helpers/averageRating.js')

app.use(express.static('dist'));


// app.get('/products/:product_id', (req, res) => {

//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products?count=all',
//    {headers: {Authorization: config.TOKEN}})
//   .then((response) => {
//     res.status(200).send(response.data);
//   })
//   .catch((error) => {
//     throw new Error(error);
//   })
// })
//!!
app.get('/products/:product_id', (req, res) => {
  // console.log(req.params.product_id)
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

app.get('/reviews/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${req.params.product_id}&count=1000`,
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
// !!
app.get('/average-reviews/:product_id', (req, res) => {
  const id = Number(req.params.product_id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${id}&count=1000`,
   {headers: {Authorization: config.TOKEN}})
  .then((response) => {
    // console.log(averageRating(response.data.results))
    const avgRating = { avg: averageRating(response.data.results)}
    res.status(200).send(avgRating)
    // res.sendStatus(200)
  })
  .catch((error) => {
    console.log(error)
    res.sendStatus(500)
  })
})


app.get('/reviews/meta/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${req.params.product_id}`,
    {headers: {Authorization: config.TOKEN}})
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
