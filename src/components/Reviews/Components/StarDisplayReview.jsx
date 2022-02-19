import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon.jsx';

const StarDisplayReview = ({review}) => {

  // use map to render 5 stars
  // value from rating will determine how many stars are filled in and will need to be passed into map function
  // figure out way to make star partially filled

  const ratingValues = [1, 2, 3, 4, 5];

  return (
    <>
      {ratingValues.map((ratingValue, i) => {
        if (review.rating >= ratingValue) {
          return <StarIcon fill={'gold'} key={i} />
        }

        return <StarIcon fill={'none'} key={i} />
      })}
    </>
  )
}

export default StarDisplayReview;