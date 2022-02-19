import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarDisplayAverage from './StarDisplayAverage.jsx';

const AverageHeader = styled.h1`
  color: #525252;
  font-size: 50px;
  margin-right: 10px;
`

// const PercentRec = styled.p`
//   color: grey;
// `

const SummaryHeader = styled.h3`
  color: #525252;
`
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

const AverageRatingHeader = ({ products, product, reviews, reviewsMeta }) => {
  const [averageRating, setAverageRating] = useState(0);
  // const [percentRecommended, setPercentRecommended] = useState(null);

  useEffect(() => {
    setAverageRating(calculateAverageRating());
    // setPercentRecommended(calculatePercentRecommended());
  }, [])

  const calculateAverageRating = () => {
    // need to fix this so it works with products that do not have ratigns of a certain star value
    // in current form it will not work if a certain star value has no ratings because it relies of a static number or indexes
    const ratings = Object.values(reviewsMeta.ratings)
    const fiveStars = Number(ratings[4]) || 0;
    const fourStars = Number(ratings[3]) || 0;
    const threeStars = Number(ratings[2]) || 0;
    const twoStars = Number(ratings[1]) || 0;
    const oneStars = Number(ratings[0]) || 0;

    return ((5 * fiveStars + 4 * fourStars + 3 * threeStars + 2 * twoStars + 1 * oneStars) / (fiveStars + fourStars + threeStars + twoStars + oneStars)).toFixed(1);
  }

  // const calculatePercentRecommended = () => {
  //   const reviewCount = reviews.length;
  //   let recommendCount = 0;
  //   let recommendPercent;

  //   for (let i = 0; i < reviewCount; i++) {
  //     const review = reviews[i];
  //     if (review.recommend) {
  //       recommendCount++;
  //     }
  //   }

  //   recommendPercent = (recommendCount / reviewCount) * 100;

  //   return Math.round(recommendPercent);
  // }

  return (
    <>
      <SummaryHeader>Ratings &amp; Reviews</SummaryHeader>
      <RatingContainer>
        <AverageHeader>{averageRating} </AverageHeader>
        <StarDisplayAverage average={averageRating} />
      </RatingContainer>
      {/* <PercentRec>{percentRecommended}% of reviews recommend this product</PercentRec> */}
    </>
  )
}

export default AverageRatingHeader;