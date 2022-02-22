import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const DescriptionDiv = styled.div`
  display: flex;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  justify-content: center;
  max-width: 1000px;
  margin: 0 10px 10px 10px;
`;

const Div = styled.div`
  margin: 10px;
  max-width: 600px;
  padding: 0 50px;
`;

const Slogan = styled.h3`
  color: hsla(150,80%,50%,0.5);
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 0.85rem;
  /* font-style: italic; */
  margin-top: 10px;
`;


const ProductDescription = ({ product }) => {

  return (

    <DescriptionDiv className="product-description">

      <Div>

        <Slogan className="slogan"><em>{product.slogan}</em></Slogan>

        <Description>{product.description}</Description>

      </Div>

      <br /><br />

    </DescriptionDiv>
  );
};


export default ProductDescription;