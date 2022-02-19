import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon.jsx';

const StarDisplayAverage = ({ average }) => {

  // use map to render 5 stars
  // value from rating will determine how many stars are filled in and will need to be passed into map function
  // figure out way to make star partially filled

  const ratingValues = [1, 2, 3, 4, 5];
  // console.log(ratingSelections);
  return (
    <>
      {ratingValues.map((ratingValue, i) => {
        const rounded = Math.round(Number(average));

        if (rounded >= ratingValue) {
          return <StarIcon fill={'#ffa651'} key={i}/>
        }

        return <StarIcon fill={'none'} key={i} />
      })}
    </>
  )
}

export default StarDisplayAverage;