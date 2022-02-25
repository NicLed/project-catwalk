import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


// Styling
const CharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const SpanNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const CharacteristicInput = styled.input`
  width: 100%;
  ::slider-thumb {
    color: grey;
  }
`



const CharacteristicsBreakdown = ({ products, product, reviews, reviewsMeta }) => {


  // Rendered components
  return (
    <>
      <CharacteristicsContainer>
        {Object.values(reviewsMeta.characteristics)
          .map((characteristic, i) => {
            const characteristicKeys = Object.keys(reviewsMeta.characteristics);

            return (
            <div key={characteristic.id}>
              <label>{characteristicKeys[i]}</label>

              <br></br>

              <CharacteristicInput type="range" min="1" max="5" step="0.1" value={characteristic.value} onChange={() => {}}></CharacteristicInput>

              <br></br>
              <SpanNumberContainer>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              </SpanNumberContainer>
            </div>)
          })}
      </CharacteristicsContainer>
    </>
  )
}

export default CharacteristicsBreakdown;