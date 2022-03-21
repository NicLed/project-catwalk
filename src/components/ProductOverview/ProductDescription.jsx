import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const DescriptionDiv = styled.div`
  display: flex;
  font-family: 'Ubuntu';
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
  color: hsla(100,40%,60%,0.5);
  font-size: 1.5rem;
  font-family: 'Ubuntu';
  /* font-style: italic; */
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  font-family: 'Ubuntu';
  /* font-style: italic; */
  margin-top: 10px;
`;


const ProductDescription = ({ currentProduct }) => {

  return (

    <DescriptionDiv className="product-description">
      <Div>
        <Slogan className="slogan"><em>{currentProduct.slogan}</em></Slogan>
        <Description>{currentProduct.description}</Description>
      </Div>

      {(currentProduct.features) ? currentProduct.features.map((elem, index) => {
        <Div key={index}>
          <Description>{elem.feature}</Description>
          <Description><i className="fa-solid fa-check"></i>{elem.value}</Description>
        </Div>
      }) : null}

    </DescriptionDiv>
  );
};


export default ProductDescription;