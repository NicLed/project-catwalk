import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const ProductItemDiv = styled.div`
  background-color: hsla(10,80%,50%,0.5);
  cursor: pointer;
`

const ProductItemView = ({ photo, onHandleImageClick }) => {
  return (

    <ProductItemDiv className="product-item-view">

      <h3>ProductItemView</h3>

      <img src={photo} alt={photo} onClick={onHandleImageClick} />PHOTO HERE

    </ProductItemDiv>

  );
};


export default ProductItemView;