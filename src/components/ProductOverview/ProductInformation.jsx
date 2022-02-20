import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarDisplayAverage from '../Reviews/Components/StarDisplayAverage.jsx';


const Div = styled.div`
  border: 1px solid grey;
  box-shadow: 2px 2px 2px;
  background: linear-gradient(0deg, hsl(190,70%,99%), hsl(240,60%,100%));
  display: flex;
  flex-direction: column;
  margin: 25px 15px;
  max-width: 500px;
  padding: 30px 30px 15px 30px;
`;

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


const ProductInformation = ({product, productID, rating, styleID}) => {

  return (

    <Div className="product-information">

      <StarDisplayAverage average=""/>

      <Category>{product.category}</Category>
      <Name>{product.name}</Name>
      <h4>${product.default_price}</h4>

    </Div>

  );

};



export default ProductInformation;