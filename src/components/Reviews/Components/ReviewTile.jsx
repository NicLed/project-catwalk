import React from 'react';
import moment from 'moment';
import StarDisplayReview from './StarDisplayReview.jsx';
import RatingHelpfulness from './RatingHelpfulness.jsx';
import styled from 'styled-components';
import StarRating from './StarRating.jsx';

const Tile = styled.div`
  border-bottom: 1px solid #525252;
  margin-bottom: 20px;
`

const ReviewTile = ({ review }) => {

  return (
    <Tile>
      <StarDisplayReview review={review} />
      {/* <StarRating /> */}
      <h4>{review.reviewer_name}</h4>
      <div>{moment(review.date).format('LL')}</div>
      <h3>{review.summary}</h3>
      <div>{review.body}</div>
      <div>Review pictures</div>
      {review.recommend ?
      <div>I recommend this product</div> // add checkmark
      : null}
      {review.response ? <div>Response: {review.response}</div> : null}
      <RatingHelpfulness review={review} />
    </Tile>
  )
}

export default ReviewTile;