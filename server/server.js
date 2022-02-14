const express = require('express');
const app = express();
const port = 3000;
const config = require('../config.js');
const axios = require('axios');

app.use(express.static('dist'));

app.get('/API/products', (req, res) => {
  console.log('Request:', req.body)
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
   {headers: {Authorization: config.TOKEN}})
  .then((response) => {
    res.send(response.data).status(200);
  })
  .catch((error) => {
    // throw new Error(error);
    // console.log(error);
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
