import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarDisplayAverage from './StarDisplayAverage.jsx';

const AverageHeader = styled.h1`
  color: #525252;
  font-size: 50px;
  margin-right: 10px;
`

const SummaryHeader = styled.h3`
  color: #525252;
`
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

const AverageRatingHeader = ({ products, product, reviews, reviewsMeta }) => {
  let averageRating;
  let ratings = [];

  if (ratings.length < 5) {
    const ratingValues = [1, 2, 3, 4, 5]

    for (let i = 0; i < ratingValues.length; i++) {
      if (!reviewsMeta.ratings[ratingValues[i]]) {
        ratings.push(0);
      } else {
        ratings.push(reviewsMeta.ratings[ratingValues[i]]);
      }
    }
  } else {
    ratings = Object.values(reviewsMeta.ratings);
  }

  const fiveStars = Number(ratings[4]);
  const fourStars = Number(ratings[3]);
  const threeStars = Number(ratings[2]);
  const twoStars = Number(ratings[1]);
  const oneStars = Number(ratings[0]);

  averageRating = ((5 * fiveStars + 4 * fourStars + 3 * threeStars + 2 * twoStars + 1 * oneStars) / (fiveStars + fourStars + threeStars + twoStars + oneStars)).toFixed(1);

  return (
    <>
      <SummaryHeader>Ratings &amp; Reviews</SummaryHeader>
      <RatingContainer>
        <AverageHeader>{averageRating} </AverageHeader>
        <StarDisplayAverage average={averageRating} />
      </RatingContainer>
    </>
  )
}

export default AverageRatingHeader;