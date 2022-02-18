import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AverageHeader = styled.h1`
  color: #525252;
`

const PercentPara = styled.p`
  color: grey;
`

const SummaryHeader = styled.h3`
  color: #525252;
`

const AverageRatingHeader = ({products, product, reviews, reviewsMeta}) => {
  const [averageRating, setAverageRating] = useState(0);
  const [percentRecommended, setPercentRecommended] = useState(null);

  useEffect(() => {
    setAverageRating(calculateAverageRating());
    setPercentRecommended(calculatePercentRecommended());
  }, [])

  const calculateAverageRating = () => {
    const ratings = Object.values(reviewsMeta.ratings)
    const fiveStars = Number(ratings[4]);
    const fourStars = Number(ratings[3]);
    const threeStars = Number(ratings[2]);
    const twoStars = Number(ratings[1]);
    const oneStars = Number(ratings[0]);

    return ((5 * fiveStars + 4 * fourStars + 3 * threeStars + 2 * twoStars + 1 * oneStars) / (fiveStars + fourStars + threeStars + twoStars + oneStars)).toFixed(1);
  }

  const calculatePercentRecommended = () => {
    const reviewCount = reviews.length;
    let recommendCount = 0;
    let recommendPercent;

    for (let i = 0; i < reviewCount; i++) {
      const review = reviews[i];
      if (review.recommend) {
        recommendCount++;
      }
    }

    recommendPercent = (recommendCount / reviewCount) * 100;

    return Math.round(recommendPercent);
  }

  return (
    <>
      <SummaryHeader>Ratings &amp; Reviews</SummaryHeader>
      <AverageHeader>{averageRating} Stars</AverageHeader>
      <PercentPara>{percentRecommended}% of reviews recommend this product</PercentPara>
    </>
  )
}

export default AverageRatingHeader;