import React, { useState, useEffect, useRef, createRef } from 'react';
import styled from 'styled-components';


const ExpandView = styled.figure`
  animation-name: custom;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-duration: .5s;
  background-repeat: no-repeat;
  background: hsla(100,90%,80%,0.5);
  border: 1px dotted lightgrey;
  display: flex;
  justify-content: center;
  height: 900px;
  position: fixed;
  width: 1500px;
`;

const Image = styled.img`
  border-radius: 2px;
  cursor: pointer;
  display: block;
  margin: auto;
  max-height: auto;
  max-width: auto;
`;



const ExpandedView = ({ expandedView, onHandleImageClick }) => {

  const expandRef = useRef();


  return (

    <ExpandView onClick={onHandleImageClick} ref={expandRef}>

      <h1>EXPANDED VIEW OF IMAGE</h1>

    </ExpandView>

  );
}


export default ExpandedView;