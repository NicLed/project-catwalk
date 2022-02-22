import React, { useState, useEffect } from 'react';
import { Title, Button } from '../styles/styles';
import axios from 'axios';
import RatingsReviews from './Reviews/RatingsReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import requestsAPI from '../../server/requestsAPI';
import Questions from './CustomerQnA/Questions.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

const App = (props) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [productID, setProductID] = useState(null);
  const [allProductID, setAllProductID] = useState([]);
  const [productIndex, setProductIndex] = useState(0);
  const [styles, setStyles] = useState([]);


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProductID(allProductID[productIndex]);
    }, 0);
    getAllProductID();
  }, [productID, productIndex]);

  const getProducts = () => {
    axios.get('/products')
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data);
        setProduct(response.data[0]);
      })
      .catch((error) => {
        throw new Error(error);
      })
  }


  const previousIndex = () => {
    productIndex === 0 ? setProductIndex(0) : setProductIndex((previousState) => previousState - 1);
  };

  const nextIndex = () => { setProductIndex((previousState) => previousState + 1) };

  const getAllProductID = () => {
    requestsAPI.getAllProductIDs()
      .then(({ data }) => {
        setProductID(data[productIndex].id);
        setAllProductID(data.map((item) => item.id));
        setProduct(data[productIndex]);
      })
      .then(() => {
        requestsAPI.getProductStyles(productID)
          .then((styles) => {
            console.log('STYLES ARE HERE >>>>>>>>>>', styles)
            setStyles(styles.data.results);
          })
          .catch((err) => console.log(`FAILED to GRAB STYLES 😟😟😟 ${err}`))
      })
      .catch((err) => console.error(err))
  };


  return (
    <div>
      <Title>Project Cat Walk</Title>

      <Button onClick={() => previousIndex()}><strong><em>prev</em></strong></Button>
      <Button onClick={() => nextIndex()}><strong><em>next</em></strong></Button>

      {styles.length && <ProductOverview product={product} productID={productID} styles={styles} ratings={"ratings"} />}
      {products.length && <RelatedItems productID={productID} styles={styles} />}
      <div>

      {Object.keys(product).length && products.length ? <Questions products={products} product={product} /> : null}

      </div>
      {Object.keys(product).length && products.length ?
        <RatingsReviews products={products} product={product} />
        : null}
    </div>
  );
};

export default App;
