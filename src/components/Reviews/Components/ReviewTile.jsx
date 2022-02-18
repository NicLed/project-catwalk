import React from 'react';
import moment from 'moment';
import StarRating from './StarRating.jsx';
import RatingHelpfulness from './RatingHelpfulness.jsx';
import styled from 'styled-components';

const Tile = styled.div`
  border-bottom: solid;
`

const ReviewTile = ({ review }) => {

  return (
    <Tile>
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
    </Tile>
  )
}

export default ReviewTile;