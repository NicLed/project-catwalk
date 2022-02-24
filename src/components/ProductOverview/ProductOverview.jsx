import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import requestsAPI from '../../../server/requestsAPI';
import { Button } from '../../styles/styles';
import ProductGallery from './ProductGallery.jsx';
import ExpandedView from './ExpandedView.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
// import Thumbnail from './Thumbnail.jsx';
import ProductDescription from './ProductDescription.jsx';
import { FaCloudShowersHeavy } from 'react-icons/fa';


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


const ProductOverview = ({ product, products, productID, allProductIDs, stylesAll, ratings, setProductID }) => {

  const [expandedView, setExpandedView] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(product);
  const [currentProductID, setCurrentProductID] = useState(productID);
  const [currentStylesAll, setCurrentStylesAll] = useState(stylesAll);
  const [currentStyle, setCurrentStyle] = useState(stylesAll[0]);
  const [styleID, setStyleID] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [productImages, setProductImages] = useState([]);
  const [thumbnailPhotos, setThumbnailPhotos] = useState([]);

  const ref = useRef();
  const [ExpandedViewComponent, toggleExpandVisibility] = useVisibilityToggler(
    <ExpandedView className="expanded-view" src={productImages[imageIndex]} expandedView={expandedView} />, false);


  useEffect(() => {
    getStyles(productID);
  }, [productID]);

  useEffect(() => {
		setTimeout(() => {
      setCurrentProductID(products[productIndex]);
      setProductID(products[productIndex].id);
      console.log('OVERVIEW.stylesAll: ', stylesAll)
		}, 0);
	}, [currentProductID, productIndex]);


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
        getProductPhotos(prod_ID, data.results[0].style_id )
      })
      .then(() => {
        console.log('currentStylesAll: ', currentStylesAll)
        console.log('currentStyle: ', currentStyle)
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
      console.log('photossssssssssssss', photos[0].url)
      // setProductImages(photoList);
      // setThumbnailPhotos(photos.map((photo, id) => photo.thumbnail_url));

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

    // <OverviewDiv style={{ background: 'lightGreen' }} ref={ref}>
    <OverviewDiv >


      <Button onClick={() => previousIndex()}><strong><em>prev</em></strong></Button>
      <Button onClick={() => nextIndex()}><strong><em>next</em></strong></Button>
      <h2>{productIndex}</h2>

      {ExpandedViewComponent}

      {/* {console.log('PRODUCTTTTT OVERVIEWWWWW  💯👏💯👏💯👏', productImages[0].url)} */}
      <ContainerDiv className="product-overview">

        <Div className="container">

          <ImageDiv>

            {/* <Thumbnail /> */}

            <ProductGallery
              onHandleImageClick={toggleExpandVisibility}
              product={product}
              productImages={productImages} />

          </ImageDiv>

          <ContainerDiv>

            <Div style={{display: 'flex'}}>
              <Div style={{justifyContent: 'spaceEvenly'}}><i className="footer-icon fab fa-twitter"></i></Div>
              <Div style={{justifyContent: 'spaceEvenly'}}><i className="fa-brands fa-instagram-square"></i></Div>
              <Div style={{justifyContent: 'spaceEvenly'}}><i className="footer-icon fab fa-facebook-square"></i></Div>
            </Div>

            <ProductInformation currentProduct={products[productIndex]} productID={productID} rating={"rating"} styleID={styleID} />

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
