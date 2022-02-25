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
  color: hsla(100,40%,60%,0.5);
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  margin-bottom: 15px;
`;

const Name = styled.h1`
  color: hsla(100,40%,60%,0.5);
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  margin: 0;
`;

const Price = styled.h4`
  font-family: 'Noto Serif';
  font-style: italic;
`

const getPrice = (item) => {
  if (item.sale_price) { return `SALE $${item.sale_price}` }

  return item.original_price;
}

const ProductInformation = ({ currentProduct, productID, rating, stylesAll, styleID, imageIndex, setImageIndex, currentStyle }) => {

  return (

      <ProductInfoDiv className="product-information">

        <InfoSectionDiv>

          {stylesAll && <StarDisplayAverage average="" />}

        </InfoSectionDiv>

        <br /><br />

        <InfoSectionDiv>

          {console.log('stylesAllllllllllllll: ', stylesAll[imageIndex])}
          {console.log('stylesINDEXXXXXXXXXX: ', currentStyle)}

        {currentStyle ? (
          <>
            <Category>{currentStyle.category || null}</Category>
            <Name>{currentStyle.name}</Name>
            <Price>USD ${getPrice(currentStyle)}</Price>
          </>
        ) : null}

        </InfoSectionDiv>

      </ProductInfoDiv>

  );
};


export default ProductInformation;