import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {FaStar,FaShoppingCart} from 'react-icons/fa';


const AddCartDiv = styled.div`
  /* background: hsla(250,70%,70%,0.5); */
  border-radius: 10%;
`;

const CartButton = styled.button`
  background: lightgrey;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px;
  color: black;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Noto Serif';
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

const Div = styled.div`
  display: flex;
  height: 50px;
  /* justify-content: center; */
  margin: 5px;
`;

const ButtonDiv = styled.div`
  margin-bottom: 25px;
`

const StarButton = styled.button`
  background: lightgrey;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-family: 'Noto Serif';
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

const SelectQuantity = styled.select`
  background-color: lightgray;
  border: 1px solid grey;
  box-shadow: 2px 2px 2px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Noto Serif';
  height: 25px;
  margin: 15px 12px 24px 12px;
  padding-left: 5px;
  width: 30%;

  option {
    background-color: lightgrey;
    color: black;
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
    white-space: pre;
  }
`;

const SelectSize = styled.select`
  background-color: lightgray;
  border: 1px solid grey;
  box-shadow: 2px 2px 2px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Noto Serif';
  height: 25px;
  margin: 15px 12px 24px 12px;
  padding-left: 5px;
  width: 50%;

  option {
    background-color: lightgrey;
    color: black;
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
    white-space: pre;
  }
`;

const StarIcon = styled(FaStar)`
  color: #fffb2c;
`;

const CartIcon = styled(FaShoppingCart)`
color: grey;
margin-top: 3px;
`


const getSelectedSizeQuantity = () => {
  const sizeSelect = document.getElementById('select-size');
  const size = SelectSize.options[sizeSelect.selectedIndex].value;
  const quantitySelect = document.getElementById('select-quantity');
  const quantity = SelectQuantity.options[quantitySelect.selectedIndex].value;

  console.log(`MUST ADD ${quantity} SIZE ${size}'s of selected item to CART 🛒`);
}


const AddToCart = ({ addToCart, styles }) => {

  return (

    <AddCartDiv>

      <Div className="add-items-cart">

        <SelectSize id="select-size" onChange={(event) => console.log(event.target.value)}>

          <option className="option-size" value='' hidden>SELECT SIZE</option>
          <option className="option-size" value='S'> S </option>
          <option className="option-size" value='M'> M </option>
          <option className="option-size" value='L'> L </option>
          <option className="option-size" value='XL'> XL </option>

        </SelectSize>

        <SelectQuantity id="select-quantity" onChange={(event) => console.log(event.target.value)}>

          <option className="option-quantity"> - </option>
          <option className="option-quantity" value={1}> 1 </option>
          <option className="option-quantity" value={2}> 2 </option>
          <option className="option-quantity" value={3}> 3 </option>
          <option className="option-quantity" value={4}> 4 </option>
          <option className="option-quantity" value={5}> 5 </option>
          <option className="option-quantity" value={6}> 6 </option>
          <option className="option-quantity" value={7}> 7 </option>
          <option className="option-quantity" value={8}> 8 </option>
          <option className="option-quantity" value={9}> 9 </option>
          <option className="option-quantity" value={10}> 10 </option>

        </SelectQuantity>

      </Div>

      <Div>

        <CartButton style={{ width: '45%', marginLeft: '10px' }} onClick={() => getSelectedSizeQuantity()}>ADD TO CART <CartIcon /></CartButton>

        <StarButton style={{ width: '15%', marginLeft: '80px' }} onClick={() => console.log('must ADD to LIKED ❤️')} ><StarIcon /></StarButton>

      </Div>

    </AddCartDiv>

  );
};


export default AddToCart;