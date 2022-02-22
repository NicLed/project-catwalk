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

const SelectSize = () => {

  return (

    <Select id="select-size" onChange={(event) => console.log(event.target.value)}>

      <option className="option-size" value='' hidden>SELECT SIZE</option>
      <option className="option-size" value='S'> S </option>
      <option className="option-size" value='M'> M </option>
      <option className="option-size" value='L'> L </option>
      <option className="option-size" value='XL'> XL </option>

    </Select>

  );
};


export default SelectSize;
