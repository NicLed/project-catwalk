import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Select = styled.select`
  background-color: lightgray;
  border: 1px solid grey;
  box-shadow: 2px 2px 2px;
  cursor: pointer;
  margin: 5px;
  padding: 8px;
`

const SelectQuantity = () => {

  return (

    <div>
      {/* <Select className="select-quantity" value={"equalsCurrentSize"} onChange={() => "invokeHandleSelectQuantity"}> */}
      <Select className="select-quantity">
        <option className="option-quantity"> - </option>
        <option className="option-quantity"> 1 </option>
        <option className="option-quantity"> 2 </option>
        <option className="option-quantity"> 3 </option>
      </Select>
    </div>

  )


}


export default SelectQuantity;