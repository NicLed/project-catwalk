import React, { useState, useEffect } from 'react';

const AverageRatingHeader = ({products, product, reviews, reviewsMeta}) => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    setAverageRating(calculateAverageRating());
  }, [])

  const calculateAverageRating = () => {
    const ratings = Object.values(reviewsMeta.ratings)
    const fiveStars = Number(ratings[4]);
    const fourStars = Number(ratings[3]);
    const threeStars = Number(ratings[2]);
    const twoStars = Number(ratings[1]);
    const oneStars = Number(ratings[0]);
    console.log(fiveStars);

    return ((5 * fiveStars + 4 * fourStars + 3 * threeStars + 2 * twoStars + 1 * oneStars) / (fiveStars + fourStars + threeStars + twoStars + oneStars)).toFixed(1);
  }

  return (
    <>
      <h3>Ratings &amp; Reviews</h3>
      <h1>Average Rating: {averageRating} Stars</h1>
    </>
  )
}

export default AverageRatingHeader;