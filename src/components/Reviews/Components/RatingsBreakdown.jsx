import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StarBar = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 10px;
`

const MainBar = styled.div`
  background-color: lightgrey;
  width: 200px;
  height: 10px;
`

const BarTitle = styled.a`
  margin-right: 8px;
  color: grey;
`

const AmountBar = styled.div`
  background-color: #525252;
  max-width: ${({ width }) =>
    width};
  height: 10px;
`

const RatingsBreakdown = ({ products, product, reviews, reviewsMeta }) => {
  let averages = [];

  const totals = Object.values(reviewsMeta.ratings).reverse();
  const totalRatings = totals.reduce((previous, current) => {
    return Number(previous) + Number(current);
  })
  averages = totals.map((value) => {
    return (Number(value) / totalRatings) * 100;
  })

  return (
    <>
      {averages.map((average, i) => {
        let number = 5 - i
        average = average + '%'

        return (
          <StarBar key={number}>
            <BarTitle href="" key={number}>{number} Stars</BarTitle>
            <MainBar key={number + 1}>
              <AmountBar width={average} key={number}></AmountBar>
            </MainBar>
          </StarBar>)
      })}
    </>
  )
}

export default RatingsBreakdown;