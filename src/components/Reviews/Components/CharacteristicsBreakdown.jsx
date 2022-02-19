import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CharacteristicsBreakdown = ({ products, product, reviews, reviewsMeta }) => {

  return (
    <>
      <CharacteristicsContainer>
        <input type="range" text="Size"></input>
        <div></div>
        <input type="range" text="Comfort"></input>
      </CharacteristicsContainer>
    </>
  )
}

export default CharacteristicsBreakdown;