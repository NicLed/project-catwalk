import React, { Component, useState, useEffect } from 'react';
import { Title, Button } from '../styles/styles';
import RatingsReviews from './Reviews/RatingsReviews.jsx';
import axios from 'axios';

const App = (props) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    axios.get('/API/products')
      .then((response) => {
        setProducts(response.data);
        setProduct(response.data[0]);
      })
      .catch((error) => {
        throw new Error(error);
      })
  }

  return (
    <div>
      <Title>Project Cat Walk</Title>
      <Button>button</Button>
      {/* <Overview products={products} product={product} /> */}
      {/* <RelatedProducts products={products} product={product} /> */}
      {/* <QnA products={products} product={product} /> */}
      {Object.keys(product).length && products.length ?
        <RatingsReviews products={products} product={product} />
        : null}
      {console.log(products.length)}
    </div>
  )
}

export default App;
