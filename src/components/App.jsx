import React, { useState, useEffect } from 'react';
import { Title, Button } from '../styles/styles';
import axios from 'axios';
import RatingsReviews from './Reviews/RatingsReviews.jsx';
// import RelatedItems from './RelatedItems/RelatedItems.jsx';
// import Questions from './CustomerQnA/Questions.jsx';
// import ProductOverview from './ProductOverview/ProductOverview.jsx';


const App = (props) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    axios.get('/products')
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
      {/* <ProductOverview products={products} product={product} /> */}
      {/* <RelatedItems products={products} product={product} /> */}
      {/* <Questions products={products} product={product} /> */}
      {Object.keys(product).length && products.length ?
        <RatingsReviews products={products} product={product} />
        : null}
      {console.log(products.length)}
    </div>
  )
}

export default App;
