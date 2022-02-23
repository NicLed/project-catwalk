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
  margin-right: 5px;
`

const BarTitle = styled.a`
  margin-right: 8px;
  color: #767676;
`

const AmountBar = styled.div`
  background-color: #028a00;
  max-width: ${({ width }) =>
    width};
  height: 10px;
`

const ReviewTotals = styled.div`
  width: 8px;
`
const PercentRec = styled.p`
  color: #767676;
`

const RatingsBreakdown = ({ products, product, reviews, reviewsMeta }) => {

  const recommended = Number(reviewsMeta.recommended.true) || 0;
  const notRecommended = Number(reviewsMeta.recommended.false) || 0;
  const recommendCount = recommended + notRecommended;
  const percentRecommended = Math.round((recommended / recommendCount) * 100);
  let averages = [];
  let totalsByRating = [];

  if (Object.values(reviewsMeta.ratings).length !== 5) {
    const ratingValues = [5, 4, 3, 2, 1];

    for (let i = 0; i < ratingValues.length; i++) {
      if (!reviewsMeta.ratings[ratingValues[i]]) {
        totalsByRating.push(0);
      } else {
        totalsByRating.push(reviewsMeta.ratings[ratingValues[i]]);
      }
    }

  } else {
    totalsByRating = Object.values(reviewsMeta.ratings).reverse();
  }


  const totalRatings = totalsByRating.reduce((previous, current) => {
    return Number(previous) + Number(current);
  })

  averages = totalsByRating.map((value) => {
    return (Number(value) / totalRatings) * 100;
  })

  return (
    <>
      {averages.map((average, i) => {
        let number = 5 - i;
        average = average + '%';

        return (
          <StarBar key={number}>
            <BarTitle href="" key={number}>{number} Stars</BarTitle>
            <MainBar key={number + 1}>
              <AmountBar width={average} key={number}></AmountBar>
            </MainBar>
            {totalsByRating[i]}
          </StarBar>)
      })}
      <PercentRec>{percentRecommended}% of reviews recommend this product</PercentRec>
    </>
  )
}

export default RatingsBreakdown;