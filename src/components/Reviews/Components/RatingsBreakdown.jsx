import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StarBar = styled.div`
  display:flex;
  margin-bottom: 10px;
`

const MainBar = styled.div`
  background-color: grey;
  width: 200px;
  height: 10px;
`

const BarTitle = styled.a`
  margin-right: 8px;
  color: grey;
`

const AmountBar = styled.div`
  background-color: black;
  width: 20px; // determined by percentage of reviews
  height: 10px;
`

const RatingsBreakdown = ({ products, product, reviews, reviewsMeta }) => {
  const [widthPercentage, setWidthPercentage] = useState(50);
  const [starNumber, setStarNumber] = useState(['5', '4', '3', '2', '1']);

  return (
    <>
      {starNumber.map((number) => (
      <StarBar key={number + 3}>
        <BarTitle href="" key={number + 2}>{number} Stars</BarTitle>
        <MainBar key={number + 1}>
          <AmountBar width={widthPercentage} key={number}></AmountBar>
        </MainBar>
      </StarBar>
      ))}
    </>
  )
}

export default RatingsBreakdown;