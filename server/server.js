const express = require('express');
const axios = require('axios');
const { TOKEN } = require('../config.js');
const requestsAPI = require('./requestsAPI');
const averageRating = require('./helpers/averageRating.js')

const port = 3000;
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
      console.error(error);
    })
});

app.get('/products/:product_id', (req, res) => {
  requestsAPI.getProductDetails(req.params.product_id)
    .then((result) => res.status(200).send(result.data))
    .catch((err) => {
      console.error(err);
      res.send(err);
    })
});

app.get('/reviews/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${req.params.product_id}&count=1000`,
    { headers: { Authorization: TOKEN } })
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      // throw new Error(error);
      console.error(error);
    });
});

// !!
app.get('/related/:product_id', (req, res) => {
  const id = req.params.product_id
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/related`, { headers: { Authorization: TOKEN } })
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      // throw new Error(error);
      console.error(error);
    });
});

// !!
app.get('/average-reviews/:product_id', (req, res) => {
  const id = Number(req.params.product_id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${id}&count=1000`, { headers: { Authorization: TOKEN } })
    .then((response) => {
      // console.log(averageRating(response.data.results))
      const avgRating = { avg: averageRating(response.data.results) }
      res.status(200).send(avgRating);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500)
    });
});


app.get('/qa/questions/:product_id', (req, res) => {
  // console.log('reqparams: 👁👁👁👁👁👁', req.params);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${req.params.product_id}&count=1000`,
    { headers: { Authorization: TOKEN } })
    .then((response) => {
      res.status(201).send(response.data)
      console.log('response:', response.data)
    })
    .catch((err) => {
      console.error(err);
    });
});


app.get('/reviews/meta/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${req.params.product_id}`,
    { headers: { Authorization: TOKEN } })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      // throw new Error(error);
      console.error(error);
    });
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

