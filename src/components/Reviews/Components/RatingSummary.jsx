import React, { useState, useEffect } from 'react';
import AverageRatingHeader from './AverageRatingHeader.jsx';

const RatingSummary = ({products, product, reviews, reviewsMeta}) => {

  return (
    <>
      <AverageRatingHeader products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} />
      <input type="range"></input>
    </>
  )
}

export default RatingSummary;