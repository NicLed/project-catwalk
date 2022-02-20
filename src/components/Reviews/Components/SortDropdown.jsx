import React, { useState, useEffect } from 'react';

const SortDropdown = (props) => {

  return (
    <>
      <select name="sorted by">
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </select>
    </>
  )
}

export default SortDropdown;