import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarDisplayAverage from '../Reviews/Components/StarDisplayAverage.jsx';


const ProductInfoDiv = styled.div`
  border: 1px solid grey;
  border-radius: 10%;
  box-shadow: 2px 2px 2px;
  background: linear-gradient(0deg, hsl(190,70%,99%), hsl(240,60%,100%));
  display: flex;
  flex-direction: column;
  margin: 25px 15px;
  max-width: 500px;
  padding: 30px 30px 15px 30px;
`;

const InfoSectionDiv = styled.div`
  /* background: hsla(20,90%,80%,0.5); */
`

const Category = styled.h3`
  color: hsla(150,50%,50%,0.5);
  font-size: 20px;
  font-style: italic;
  margin-bottom: 15px;
`;

const Name = styled.h1`
  color: hsla(150,90%,50%,0.5);
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

const Price = styled.h5`
  font-style: italic;
`


const ProductInformation = ({currentProduct, productID, rating, styleID}) => {

  return (

    <ProductInfoDiv className="product-information">

      <InfoSectionDiv>

        <StarDisplayAverage average="" />

      </InfoSectionDiv>

      <br /><br />

      <InfoSectionDiv>

        <Category>{currentProduct.category}</Category>

        <Name>{currentProduct.name}</Name>

        <Price>USD ${currentProduct.default_price}</Price>

      </InfoSectionDiv>

    </ProductInfoDiv>

  );

};



export default ProductInformation;