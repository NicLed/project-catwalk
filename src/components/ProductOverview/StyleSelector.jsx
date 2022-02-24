import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart.jsx';


const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
  max-width: 400px;
`;

const StyleDiv = styled.div`
  background: hsla(100,50%,50%,0.5);
  border-radius: 15%;
  height: 125px;
  margin: 12px 12px 0px 12px;
  margin: 0px;
  padding: 8px 12px 0px 12px;
`;

const StyleImage = styled.img`
  border: 2px solid;
  border-radius: 50%;
  cursor: pointer;
  margin: 4px;
  height: 68px;
  width: 68px;
  object-fit: cover;
  &:hover {
    border: 0px solid black;
    height: 72px;
    width: 72px;
  }
`;


const StyleSelector = ({ currentProduct, currentStylesAll, onHandleSelect, addToCart, onQuantitySelect, onStyleSelect, onSelectSKU, ratings, styleID }) => {


  const [styleName, setStyleName] = useState(null);
  const [styleInfo, setStyleInfo] = useState(null);
  const [styleImages, setStyleImages] = useState(null);


  // if (currentStylesAll.results) {
  //   currentStylesAll.results.forEach((style) => {
  //     if (style.style_id === styleID) {
  //       setStyleName(style.name);
  //       setStyleInfo(style);
  //     }
  //   });

  //   const cartSizeOptions = Object.keys(styleInfo.skus);
  //   const optionSize = [];
  //   for (let i = 0; i < currentSizeOptions.length; i++) {
  //     const currentSizeInfo = currentStyleDetailedInfo.skus[currentSizeOptions[i]];
  //     if (currentSizeInfo.quantity > 0) {
  //       sizeOptionsElements.push(
  //         <option key={i} value={currentSizeOptions[i]}>{currentSizeInfo.size}</option>
  //         )
  //       }
  //     }

  //   }
  // //creates the default setting for the size select list
  // let sizeDefault;
  // if (sizeOptionsElements.length > 0) {
  //   if (selectedSizeSKU) {
  //     sizeDefault = <option defaultValue disabled={true}>Select Size</option>
  //   } else {
  //     sizeDefault = <option defaultValue>Select Size</option>
  //   }
  // } else {
  //   sizeDefault = <option defaultValue>Out of Stock</option>;
  // }

  // //creates the quantity select options list and also sets default values
  // let quantityOptions = [];
  // let quantityDefault = [];
  // if (selectedSizeSKU) {
  //   const currentSizeQuantity = currentStyleDetailedInfo.skus[selectedSizeSKU].quantity > 15
  //     ? 15
  //     : currentStyleDetailedInfo.skus[selectedSizeSKU].quantity;
  //   for (var i = 1; i < currentSizeQuantity + 1; i++) {
  //     i = 0
  //       ? quantityOptions.push(<option key={i} defaultValue value={i}>{i}</option>)
  //       : quantityOptions.push(<option key={i} value={i}>{i}</option>);
  //   }
  // } else {
  //   quantityDefault = <option defaultValue>Qty</option>
  // }

  // //renders price depending if regular or sale price
  // let currentPrice = currentStyleDetailedInfo.sale_price === null
  //   ? <div className="current-product-pricing">${currentStyleDetailedInfo.original_price}</div>
  //   : <div className="current-product-pricing"><span className="crossed-off-price">${currentStyleDetailedInfo.original_price}</span>${currentStyleDetailedInfo.sale_price}</div>

  return (

    <>
      <StyleDiv className="style-selector">

        <Div>

          <h4 className="style-selector">StyleSelector</h4>

          <img src="" alt="" className="style-image" />

        </Div>

      </StyleDiv>

      <AddToCart addToCart={addToCart} styles={"styles"} />

    </>
  );
}


export default StyleSelector;