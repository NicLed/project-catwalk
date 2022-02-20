import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const DescriptionDiv = styled.div`
  border: 1px dotted lightgrey;
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 30px;
`;

const Div = styled.div`
  margin: 10px;
  max-width: 500px;
  padding: 0 50px;
`;

const Slogan = styled.h3`
  color: hsla(150,80%,50%,0.5);
  font-size: 1.5rem;
  font-style: italic;
`;


const ProductDescription = ({ product }) => {

  return (
    <DescriptionDiv className="product-description">
      <Div style={{borderRight: '1px dotted lightgrey'}}>
        <Slogan className="slogan"><em>{product.slogan}</em></Slogan>
        <p>{product.description}</p>
      </Div>
      <Div>
        {/* <p>{product.description}</p> */}
      </Div>
    </DescriptionDiv>
  );
};


export default ProductDescription;