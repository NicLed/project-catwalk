import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Select = styled.select`
  background-color: lightgray;
  border: 1px solid grey;
  box-shadow: 2px 2px 2px;
  cursor: pointer;
  font-size: 14px;
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

const SelectQuantity = () => {

  return (

    <Select id="select-quantity" onChange={(event) => console.log(event.target.value)}>

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

    </Select>

  );
}


export default SelectQuantity;