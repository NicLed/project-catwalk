import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SelectSize from './SelectSize.jsx';
import SelectQuantity from './SelectQuantity.jsx';


const Button = styled.button`
  background: lightgrey;
  border: 1px solid grey;
  box-shadow: 2px 2px 2px;
  color: #4e4c4c;
  cursor: pointer;
  &:hover {
    background: #a19f9f;
    color: black;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`


const AddToCart = ({AddToCart, styles}) => {

  return (

    <div className="add-items-cart">
      {console.log('stylesADDCART: ', styles[0])}

      <SelectSize />

      <br /><br />

      <SelectQuantity />

      <br /><br />

      <Button>Add to Cart</Button>

      {/* <Button onClick={() => "shouldAddFav"} style={{ width: '15%' }} >
        <img src="" style={{ height: '20px', width: '20px' }} alt="" />
      </Button> */}

    </div>

  )
}


export default AddToCart;