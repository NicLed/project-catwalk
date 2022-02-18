import React from 'react';
import StarRating from './StarRating.jsx';
import RatingHelpfulness from './RatingHelpfulness.jsx';

const ReviewTile = ({ review }) => {

  return (
    <div>
      <StarRating />
      <div>{review.date}</div>
      <h3>{review.summary}</h3>
      <div>{review.body}</div>
      {review.recommend ?
      <div>I recommend this product</div> // add checkmark
      : null}
      <h4>{review.reviewer_name}</h4>
      <div>{review.response}</div>
      <RatingHelpfulness review={review} />
    </div>
  )
}

export default ReviewTile;