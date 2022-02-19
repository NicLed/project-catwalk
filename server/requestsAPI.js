const axios = require('axios');
const { TOKEN } = require('../config');


// PRODUCT OVERVIEW API REQUESTS

// OPTIONS CREATE HELPER FUNCTION
// const createOptions = (endpoint, method, params = {}, headers = {Authorization: TOKEN}) => {
//   return {
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${endpoint}`,
//     method: `${method}`,
//     data: params,
//     headers: headers,
//   }
// }

// const test = createOptions('products/', 'GET')

// module.exports = {}


// GET ALL PRODUCTS
const getAllProducts = () => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`,
    method: 'GET',
    headers: { Authorization: TOKEN },
  };

  return axios(options);
};

// `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/?count=13&page=2`
const getAllProductIDs = () => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/?count=50`,
    method: 'GET',
    headers: { Authorization: TOKEN },
  };

  return axios(options);
};

// GET PRODUCT DETAILS BY ID
const getProductDetails = (productID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`,
    method: 'GET',
    headers: { Authorization: TOKEN },
  };

  return axios(options);
};

// GET PRODUCT STYLES BY ID
const getProductStyles = (productID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/styles`,
    method: 'GET',
    headers: { Authorization: TOKEN },
  };

  return axios(options);
};

// GET PRODUCT REVIEWS BY ID
const getProductReviews = (productID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?sort="relevant"&product_id=${productID}&count=50`,
    method: 'GET',
    headers: { Authorization: TOKEN },
  };

  return axios(options);
};

// GET PRODUCT PHOTOS BY ID
const getProductStylePhotos = (productID, styleID) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/styles`,
    method: 'GET',
    headers: {
      Authorization: TOKEN
    },
  };

  return axios(options)
    .then(({ data }) => data.results.reduce((acc, elem) => {
      if (elem.style_id === styleID) { return elem }
      return acc;
    }, {}));
};

// ADD ITEM TO SHOPPING CART
const addItemToCart = (item) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart`,
    method: 'POST',
    data: JSON.stringify(item),
    headers: {
      Authorization: TOKEN,
      'Content-Type': 'application/json',
    },
  };

  return axios(options);
};


module.exports = { getAllProducts, getAllProductIDs, getProductDetails, getProductStyles, getProductReviews, getProductStylePhotos, addItemToCart};






