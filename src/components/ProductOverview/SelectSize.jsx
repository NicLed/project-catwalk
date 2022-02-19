import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Select = styled.select`
  background-color: lightgray;
  border: 1px solid grey;
  box-shadow: 2px 2px 2px;
  cursor: pointer;
`

const SelectSize = () => {

  return (

    <div>
      <Select className="select-size" onChange={() => console.log('must handleSelectSize')}>
        <option className="option-size">SELECT SIZE</option>
        <option className="option-size"> S </option>
        <option className="option-size"> M </option>
        <option className="option-size"> L </option>
        <option className="option-size"> XL </option>
      </Select>
    </div>

  );

};


export default SelectSize;
