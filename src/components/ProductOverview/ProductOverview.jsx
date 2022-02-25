import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import requestsAPI from '../../../server/requestsAPI';
import ProductGallery from './ProductGallery.jsx';
import ExpandedView from './ExpandedView.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductDescription from './ProductDescription.jsx';
import Modal from './Modal.jsx';
import { FaCaretSquareLeft, FaCaretSquareRight, FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';


const OverviewDiv = styled.div`
  cursor: pointer;
`;

export const OakShop = styled.div`
  align-items: center;
  background-color: hsla(100,40%,60%,0.5);
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.5;
  margin-top: 0;
`;

const ContainerDiv = styled.div`
  /* align-items: flex-start; */
  /* display: flex; */
  font-family: "Montserrat", sans-serif;
  margin: 4px;
  min-width: 360px;
  /* max-height: 600px; */
  padding: 0px;
  /* position: relative; */
  /* width: auto; */
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Noto Serif';
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
  font-family: 'Noto Serif';
  height: 250px;
  margin: 12px;
  min-width: 360px;
  padding: 2px;
`;

const ThumbnailDiv = styled.div`
  align-self: center;
  max-height: 500px;
`;

const SocialDiv = styled.div`
  display: flex;
  font-family: 'Noto Serif';
  justify-content: space-evenly;
`;

const Twitter = styled(FaTwitterSquare)`
  color: #c7c3c3;
  font-size: 2rem;
`;
const Instagram = styled(FaInstagramSquare)`
  color: #c7c3c3;
  font-size: 2rem;
`;
const Facebook = styled(FaFacebookSquare)`
  color: #c7c3c3;
  font-size: 2rem;
`;

const PrevProdID = styled(FaCaretSquareLeft)`
  color: #e9e6e6;
  font-size: 2rem;
  font-weight: bold;
`;

const NextProdID = styled(FaCaretSquareRight)`
  color: #e9e6e6;
  font-size: 2rem;
  font-weight: bold;
`;


const useVisibilityToggler = (component, visibility = false) => {
  const [visible, setVisible] = useState(() => visibility);
  return [(visible ? component : null), () => setVisible((state) => !state)];
};


const ProductOverview = ({ product, products, productID, allProductIDs, stylesAll, ratings, setProductID }) => {

  const [expandedView, setExpandedView] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const [currentStylesAll, setCurrentStylesAll] = useState(stylesAll);
  const [currentStyle, setCurrentStyle] = useState(stylesAll[0]);
  const [styleID, setStyleID] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const ref = useRef();
  const [ExpandedViewComponent, toggleExpandVisibility] = useVisibilityToggler(
    <ExpandedView className="expanded-view" src={productImages[imageIndex]} expandedView={expandedView} />, false);


  useEffect(() => {
    getStyles(productID);
    setCurrentStyle(imageIndex);
  }, [productID, imageIndex]);


  useEffect(() => {
    setTimeout(() => setProductID(products[productIndex].id), 0);
  }, [productIndex]);


  const previousIndex = () => {
    productIndex === 0 ? setProductIndex(0) : setProductIndex((previousState) => previousState - 1);
  };

  const nextIndex = () => {
    setProductIndex((previousState) => previousState + 1);
  };

  // GET STYLES
  const getStyles = (prod_ID) => {
    requestsAPI
      .getProductStyles(prod_ID)
      .then(({ data }) => {
        setCurrentStylesAll(data.results);
        setCurrentStyle(data.results[0]);
        setStyleID(data.results[0].style_id);
        getProductPhotos(prod_ID, data.results[0].style_id)
      })
      .catch((err) => console.log(`FAILED GET STYLES 😟😟😟 ${err}`));
  };

  // UPDATE style ID
  const updateStyleID = (style_ID) => {
    setStyleID(style_ID);
    getProductPhotos(productID, style_ID);
  }

  // GET product PHOTOS
  const getProductPhotos = (prod_ID, style_ID) => {
    requestsAPI.getProductStylePhotos(prod_ID, style_ID)
      .then(({ photos }) => {
        setProductImages(photos);
      })
      .catch((err) => console.log(`FAILED to GRAB PHOTOS 😟😟 ${err}`));
  }

  // HANDLE IMAGE CLICK EVENT
  const onHandleImageClick = (event) => {
    event.preventDefault();
    setExpandedView(!expandedView);
    // setSelectedImage(null);
  }

  // ADD ITEM TO CART => API
  const addToCart = (item) => {
    requestsAPI.addItemToCart(item)
      .then((result) => console.log('item added to cart!'))
      .catch((err) => console.error(err))
  }


  return (

    // <OverviewDiv style={{ background: 'lightGreen' }} ref={ref}>
    <OverviewDiv >

      <PrevProdID onClick={() => previousIndex()} />
      <NextProdID onClick={() => nextIndex()} />

      {ExpandedViewComponent}

      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} expandedView={expandedView} setExpandedView={setExpandedView} />}

      <ContainerDiv className="product-overview">

        <Div className="container">

          <ImageDiv>
            <Div>

              <ProductGallery
                onHandleImageClick={toggleExpandVisibility}
                currentProduct={products[productIndex]}
                productImages={productImages}
                styleID={styleID}
                stylesAll={stylesAll}
                imageIndex={imageIndex}
                setImageIndex={setImageIndex}
                setSelectedImage={setSelectedImage}
                selectedImage={selectedImage}
                setExpandedView={setExpandedView}
                expandedView={expandedView}
              />

            </Div>
          </ImageDiv>

          <ContainerDiv style={{ marginTop: '35px' }}>

            <SocialDiv>
              <a href="http://www.twitter.com" ><Twitter /></a>
              <a href="http://www.instagram.com"><Instagram /></a>
              <a href="http://www.facebook.com"><Facebook /></a>
            </SocialDiv>

            <ProductInformation
              currentProduct={products[productIndex]}
              currentStyle={currentStyle}
              productID={productID}
              rating={"rating"}
              stylesAll={stylesAll}
              styleID={styleID}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
            />

            <SelectorDiv>
              <StyleSelector
                currentProduct={products[productIndex]}
                currentStylesAll={stylesAll}
                onHandleSelect={"onHandleSelect"}
                addToCart={addToCart}
                onQuantitySelect={"onQuantitySelect"}
                onStyleSelect={"onStyleSelect"}
                onSelectSKU={"onSelect"}
                ratings={"ratings"}
                styleID={styleID}
              />
            </SelectorDiv>

          </ContainerDiv>

        </Div>

        <Div>

          <ProductDescription currentProduct={products[productIndex]} />

        </Div>

      </ContainerDiv>

    </OverviewDiv>

  );
};


export default ProductOverview;
