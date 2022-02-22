import React, { useState, useEffect, useRef, createRef } from 'react';
import styled from 'styled-components';


const ProductItemDiv = styled.div`
  align-items: center;
  /* background-color: hsla(10,80%,50%,0.5); */
  cursor: pointer;
  display: flex;
  float: right;
  height: 550px;
  justify-content: center;
  margin: 30px 15px 5px 5px;
  width: 550px;
`;

const ItemImage = styled.img`
  animation-name: custom;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
  @keyframes identifier {
    0% {
      filter: blur(10px);
      opacity: 0.5;
    }
    100% {
      filter: blur(0px);
      opactiy: 1;
    }
  }
  box-shadow: 2px 2px 2px;
  position: absolute;
  max-height: 500px;
  max-width: 500px;
`;

const ProductItemView = ({ photo, onHandleImageClick }) => {

  // const [span, setSpan] = useState(0);

  // const imageRef = useRef();

  // useEffect(() => {
  //   imageRef.current.addEventListener('load', () => {
  //     const imageHeight = imageRef.current.clientHeight;
  //     console.log('imageHeight 🤢🤢🤢🤢🤢: ', imageHeight);
  //     const imageSpan = Math.ceil(imageHeight / 10);
  //     console.log('imageSpan 😡😡😡😡😡: ', imageSpan);

  //     setSpan(imageSpan);
  //   });
  // });
  // CSS style={{gridRowEnd: `span ${span}`}}


  return (

    <ProductItemDiv className="product-item-view">
      {/* {console.log('photoPRODUCT ITEMMMMMMMMMMMMMMM: ', imageRef)} */}

      <h3>ProductItemView</h3>

      <ItemImage src={photo} alt={photo} onClick={onHandleImageClick} />
      {/* ref={imageRef} */}

    </ProductItemDiv>

  );
};


export default ProductItemView;