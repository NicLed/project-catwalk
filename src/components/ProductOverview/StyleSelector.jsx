import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
  max-width: 400px;
`;

const StyleDiv = styled.div`
  background: hsla(100,50%,50%,0.5);
  border-radius: 15%;
  height: 125px;
  margin: 12px 12px 0px 12px;
  margin: 0px;
  padding: 8px 12px 0px 12px;
`;

const StyleImage = styled.img`
  border: 2px solid rgba(0,0,0,0);
  border-radius: 50%;
  cursor: pointer;
  margin: 4px;
  height: 68px;
  width: 68px;
  object-fit: cover;
  &:hover {
    border: 0px solid black;
    height: 72px;
    width: 72px;
  }
`;


const StyleSelector = () => {

  return (

    <StyleDiv className="style-selector">

      <Div>

        <h4 className="style-selector">StyleSelector</h4>

        <img src="" alt="" className="style-image" />

      </Div>

    </StyleDiv>

  );
}


export default StyleSelector;