import React from 'react';
import ReviewListv1 from './Components/ReviewListv1.jsx';

const RatingsReviews = (props) => {

  return (
    <>
      <ReviewListv1 products={props.products} product={props.product} />
    </>
  )
}

export default RatingsReviews;