import React, { useState, useEffect } from 'react';
import { FaCartPlus, FaStar } from "react-icons/fa";
import axios from 'axios';
import styled from 'styled-components';
import SelectSize from './SelectSize.jsx';
import SelectQuantity from './SelectQuantity.jsx';


const AddCartDiv = styled.div`
  /* background: hsla(250,70%,70%,0.5); */
  border-radius: 10%;
`;

const CartButton = styled.button`
  background: lightgrey;
  border: 1px solid lightgrey;
  color: black;
  cursor: pointer;
  font-size: 15px;
  height: 25px;
  margin: 10px 12px 24px 12px;
  padding-left: 5px;
  width: 50%;

  &:hover {
    background: #b6b5b5;
    color: white;
    font-weight: 600;
    /* opacity: 0.5; */
  }
`;

const StarButton = styled.button`
  background: lightgrey;
  border: 1px solid lightgrey;
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: 25px;
  margin: 10px 12px 24px 12px;
  padding-left: 5px;
  padding-top: 3px;
  width: 50%;

  &:hover {
    color: #b6b603;
    font-weight: bold;
  }
`;

const Div = styled.div`
  display: flex;
  height: 50px;
  /* justify-content: center; */
  margin: 5px;
`;

const ButtonDiv = styled.div`
  margin-bottom: 25px;
`

const getSelectedSizeQuantity = () => {
  const selectSize = document.getElementById('select-size');
  const size = selectSize.options[selectSize.selectedIndex].value;
  const selectQuantity = document.getElementById('select-quantity');
  const quantity = selectQuantity.options[selectQuantity.selectedIndex].value;

  console.log(`MUST ADD ${quantity} SIZE ${size}'s of selected item to CART 🛒`);
}


const AddToCart = ({ AddToCart, styles }) => {

  return (

    <AddCartDiv>

      <Div className="add-items-cart">

        <SelectSize />

        <SelectQuantity />

      </Div>

      <Div>

        <CartButton style={{ width: '45%', marginLeft: '10px' }} onClick={() => getSelectedSizeQuantity()} >ADD TO CART <FaCartPlus style={{marginLeft: '5px', paddingTop: '2px'}} /></CartButton>

        <StarButton style={{ width: '15%', marginLeft: '80px' }} onClick={() => console.log('must ADD to LIKED ❤️')} ><FaStar /></StarButton>

        {/* <Button onClick={() => "shouldAddFav"} style={{ width: '15%' }} >
        <img src="" style={{ height: '20px', width: '20px' }} alt="" />
      </Button> */}
      </Div>

    </AddCartDiv>

  );
};


export default AddToCart;