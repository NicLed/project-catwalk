import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import requestsAPI from '../../../server/requestsAPI';
import ProductGallery from './ProductGallery.jsx';
import ExpandedView from './ExpandedView.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import Thumbnail from './Thumbnail.jsx';
import ProductDescription from './ProductDescription.jsx';


const ContainerDiv = styled.div`
  padding: 0px;
  margin: 4px;
  min-width: 360px;
  font-family: Arial;
`;

const Div = styled.div`
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: Arial;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  cursor: url('./images/search.svg'), zoom-in;
  max-height: 500px;
  max-width: 100%;
`;

const SelectorDiv = styled.div`
  border: 1px solid grey;
  margin: 12px;
  padding: 2px;
  min-width: 360px;
  font-family: Arial;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  background: linear-gradient(0deg, hsl(190,70%,99%), hsl(240,60%,100%));
`;

const ThumbnailDiv = styled.div`
  align-self: center;
  max-height: 500px;
`;


const ProductOverview = ({ product, products, productID }) => {


  const [expandedView, setExpandedView] = useState(false);
  const [prodID,setProdID] = useState(productID);
  const [productImages, setProductImages] = useState([]);
  const [thumbnailPhotos, setThumbnailPhotos] = useState([]);
  const [styles, setStyles] = useState([]);
  const [styleID, setStyleID] = useState('');



  useEffect(() => {
    getStyles(37311);
    getAllProducts();
    getProductPhotos(37311,220998);
  }, []);

  // GET ALL product ID's in API
  const getAllProducts = () => {
    requestsAPI.getAllProductIDs()
    .then((results) => console.log('ALL PRODUCTS', results))
    .catch((err) => console.error(err))
  }

  // GET styles
  const getStyles = (productID) => {
    requestsAPI.getProductStyles(productID)
      .then((styles) => {
        setStyles(styles.data.results);
        setStyleID(styles.data.results[0].style_id);
      })
      .catch((err) => console.error(err));
  };

  // UPDATE style ID
  const updateStyleID = (productID, styleID) => {
    console.log('attempting to update STYLE ID');
    setStyleID(styleID);
    getProductPhotos(productID, styleID);
  }

  // GET product PHOTOS
  const getProductPhotos = (productID, styleID) => {
    requestsAPI.getProductStylePhotos(productID,styleID)
    .then((results) => {
      console.log('PHOTO RESULTS', results.photos[0].url);
      setProductImages(results.photos[0].url);
      // setProductImages(results.photos.map(({url}, id) => ({id,url})));
      // setThumbnailPhotos(results.photos.map(({thumbnail_url}, id) => ({id,thumbnail_url})));
    })
    .catch((err) => console.error(err));
  }

  // ADD ITEM TO CART => API
  const addToCart = (item) => {
    requestsAPI.addItemToCart(item)
      .then((result) => console.log('item added to cart!'))
      .catch((err) => console.error(err))
  }



  return (

    <div>

      {console.log('stylesOVERVIEW', styles)};
      {console.log('styleID', styleID)};
      {console.log('product: ', product)}
      {console.log('productID', productID)};
      {console.log('current productID', prodID)};
      {console.log('expandedView: ', expandedView)};
      {console.log('productImages: ', productImages)};
      {console.log('thumbnailPhotos: ', thumbnailPhotos)};


      <ExpandedView />

      <ContainerDiv className="product-overview">
        <Div className="container">

          <ImageContainer>

            <ProductGallery product={product} productImages={productImages} />

            <Thumbnail />

            <Image src={productImages}/>

          </ImageContainer>

          <ContainerDiv>
            <ProductInformation product={product} productID={productID} rating={"rating"} styleID={styleID} />
            <SelectorDiv>

              <StyleSelector />

              <AddToCart addToCart={addToCart} styles={styles} />

            </SelectorDiv>

          </ContainerDiv>

        </Div>

        <ProductDescription product={product} />

      </ContainerDiv>
    </div>
  );

};


export default ProductOverview;
