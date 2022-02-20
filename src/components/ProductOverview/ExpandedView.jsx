import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const ExpandDiv = styled.div`
  animation-name: custom;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-duration: .5s;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  border-radius: 2px;
  cursor: pointer;
  display: block;
  margin: auto;
  max-height: auto;
  max-width: auto;
`;

const ExpandedView = () => {

  return (

    <ExpandDiv>
      {/* <h3>ExpandedView</h3> */}
    </ExpandDiv>

  )
}


export default ExpandedView;