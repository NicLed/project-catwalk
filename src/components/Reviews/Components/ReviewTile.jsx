import React from 'react';
import moment from 'moment';
import StarRating from './StarRating.jsx';
import RatingHelpfulness from './RatingHelpfulness.jsx';

const ReviewTile = ({ review }) => {

  return (
    <div>
      <StarRating />
      <h4>{review.reviewer_name}</h4>
      <div>{moment(review.date).format('LL')}</div>
      <h3>{review.summary}</h3>
      <div>{review.body}</div>
      {review.recommend ?
      <div>I recommend this product</div> // add checkmark
      : null}
      {review.response ? <div>Response: {review.response}</div> : null}
      <RatingHelpfulness review={review} />
      <div>---------------Placeholder-----------------</div>
    </div>
  )
}

export default ReviewTile;