import React, { useState, useEffect } from 'react';
import AverageRatingHeader from './AverageRatingHeader.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';

const RatingSummary = ({products, product, reviews, reviewsMeta}) => {

  return (
    <>
      <AverageRatingHeader products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} />

      <RatingsBreakdown products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} />

      <CharacteristicsBreakdown products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} />
    </>
  )
}

export default RatingSummary;