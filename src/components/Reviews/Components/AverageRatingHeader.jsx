import React, { useState, useEffect } from 'react';

const AverageRatingHeader = ({products, product, reviews, reviewsMeta}) => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    setAverageRating(calculateAverageRating());
  }, [])

  const calculateAverageRating = () => {
    // set variable for all 5 star ratings
    // set variable for all 4 star ratings
    // set variable for all 3 star ratings
    // set variable for all 2 star ratings
    // set variable for all 1 star ratings
    // set variable for total number of ratings
    // set variable for total of added ratings

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
      <h3>Ratings & Reviews</h3>
      <h1>Average Rating: {averageRating} Stars</h1>
    </>
  )
}

export default AverageRatingHeader;