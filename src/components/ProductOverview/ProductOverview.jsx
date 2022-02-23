import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import requestsAPI from '../../../server/requestsAPI';
import ProductGallery from './ProductGallery.jsx';
import ExpandedView from './ExpandedView.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import StyleInformation from './StyleInformation.jsx';
import AddToCart from './AddToCart.jsx';
// import Thumbnail from './Thumbnail.jsx';
import ProductDescription from './ProductDescription.jsx';


const OverviewDiv = styled.div`
  cursor: pointer;
`;

const ContainerDiv = styled.div`
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  font-family: sans-serif;
  margin: 4px;
  min-width: 360px;
  padding: 0px;
  /*  */
  /* align-items: flex-start; */
  /* display: flex; */
  /* max-height: 600px; */
  /* position: relative; */
  /* width: auto; */
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-family: sans-serif;
  justify-content: center;
  margin: 5px;
  padding: 5px;
`;

const ImageDiv = styled.div`
  display: flex;
`;

const Image = styled.img`
  cursor: url('./images/search.svg'), zoom-in;
  margin-top: 30px;
  max-height: 600px;
  max-width: 100%;
`;

const SelectorDiv = styled.div`
  border: 1px solid grey;
  border-radius: 10%;
  box-shadow: 2px 2px 5px #3838387f;
  background: linear-gradient(0deg, hsl(190,70%,99%), hsl(240,60%,100%));
  /* display: flex; */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 250px;
  margin: 12px;
  min-width: 360px;
  padding: 2px;
`;

const ThumbnailDiv = styled.div`
  align-self: center;
  max-height: 500px;
`;

const useVisibilityToggler = (component, visibility = false) => {
  const [visible, setVisible] = useState(() => visibility);
  return [(visible ? component : null), () => setVisible((state) => !state)];
};

// !!
export let relatedPhotos;

const ProductOverview = ({ product, productID, styles }) => {

  const [expandedView, setExpandedView] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(productID);
  const [currentStyles, setCurrentStyles] = useState(styles);
  const [styleIndex, setStyleIndex] = useState(0);
  const [styleID, setStyleID] = useState(styles[0].style_id);
  const [productImages, setProductImages] = useState([]);
  const [thumbnailPhotos, setThumbnailPhotos] = useState([]);

  const ref = useRef();
  const [ExpandedViewComponent, toggleExpandVisibility] = useVisibilityToggler(
    <ExpandedView className="expanded-view" expandedView={expandedView} />, false);


  useEffect(() => {
    setCurrentProduct(productID);
    setCurrentStyles(styles);
    getProductPhotos(productID,currentStyles[0].style_id);
  });

  // UPDATE style ID
  const updateStyleID = (style_ID) => {
    setStyleID(style_ID);
    getProductPhotos(productID, style_ID);
  }

  // GET product PHOTOS
  const getProductPhotos = (prod_ID,style_ID) => {
    requestsAPI.getProductStylePhotos(prod_ID,style_ID)
    .then((results) => {
      // console.log('PHOTO RESULTSSSSSS', results.photos);
      relatedPhotos = results.photos[0].url;
      setProductImages(results.photos[0].url);
      // setProductImages(results.photos.map(({url}, id) => ({id,url})));
      // setThumbnailPhotos(results.photos.map(({thumbnail_url}, id) => ({id,thumbnail_url})));
    })
    .catch((err) => console.log(`FAILED to GRAB PHOTOS 😟😟 ${err}`));
  }

  // HANDLE IMAGE CLICK EVENT
  const onHandleImageClick = (event) => {
    event.preventDefault();
    setExpandedView(!expandedView);
  }

  // ADD ITEM TO CART => API
  const addToCart = (item) => {
    requestsAPI.addItemToCart(item)
      .then((result) => console.log('item added to cart!'))
      .catch((err) => console.error(err))
  }



  return (

    <OverviewDiv ref={ref}>

      {ExpandedViewComponent}

      <ContainerDiv className="product-overview">

        <Div className="container">

          <ImageDiv>

            <ProductGallery
              onHandleImageClick={toggleExpandVisibility}
              product={product}
              productImages={productImages} />

            {/* <Thumbnail /> */}

          </ImageDiv>

          <ContainerDiv>

            <ProductInformation product={product} productID={productID} rating={"rating"} styleID={styleID} />

            <SelectorDiv>

              <StyleSelector />

              <AddToCart addToCart={addToCart} styles={styles} />

            </SelectorDiv>

          </ContainerDiv>

        </Div>

        <Div>

          <ProductDescription product={product} />

        </Div>

      </ContainerDiv>

    </OverviewDiv>
  );

};


export default ProductOverview;
