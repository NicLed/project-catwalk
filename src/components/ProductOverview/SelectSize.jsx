import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Select = styled.select`
  background-color: lightgray;
  border: 1px solid grey;
  box-shadow: 2px 2px 2px;
  cursor: pointer;
  width: 40%;
  height: 35px;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;

  option {
    color: black;
    background-color: lightgrey;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const SelectSize = () => {

  return (

    <Select className="select-size" onChange={() => console.log('must handleSelectSize')}>
      <option className="option-size" value='' hidden>SELECT SIZE</option>
      <option className="option-size" value='1'> S </option>
      <option className="option-size" value='2'> M </option>
      <option className="option-size" value='3'> L </option>
      <option className="option-size" value='4'> XL </option>
    </Select>
  );

};


export default SelectSize;
