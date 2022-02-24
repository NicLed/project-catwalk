import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DropDown = styled.select`
  border-color: #fff;
  cursor: pointer;
  font-size: 18px;
  color: #767676;
`

const SortDropdown = (props) => {
  const [sortMethod, setSortMethod] = useState('relevant');

  const handleDropdownSelectionChange = (e) => {
    console.log("event target value:", e.target.value);
    setSortMethod(e.target.value);
    props.getReviews(props.productID, e.target.value);
  }

  return (
    <>
      <label> sort on:
        <DropDown name="sorted by" value={sortMethod} onChange={handleDropdownSelectionChange}>
          <option value="relevant">relevance</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
        </DropDown>
      </label>
    </>
  )
}

export default SortDropdown;