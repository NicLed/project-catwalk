import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';

const InfiniteScroll = styled.div`
  overflow: scroll;
`

const ReviewList = ({products, product, reviews, reviewsMeta}) => {
  const [displayedReviews, setDisplayedReviews] = useState(2);

  const showMoreReviews = () => {
    const newDisplayedReviews = displayedReviews + 2;
    setDisplayedReviews(newDisplayedReviews);
  }

  const showFewerReviews = () => {
    setDisplayedReviews(2);
  }

  return (
      <div>
        <h3>Reviews</h3>
        <InfiniteScroll>
        {reviews.length > displayedReviews ?
          reviews.slice(0, displayedReviews).map(review => {
            return <ReviewTile review={review} key={review.review_id} />
          })
          : reviews.map(review => {
            return <ReviewTile review={review} key={review.review_id} />
          })
        }
        </InfiniteScroll>
        {reviews.length >= displayedReviews ?
        <button onClick={() => showMoreReviews()} >More Reviews</button>
        : null}

        {reviews.length <= displayedReviews ?
        <button onClick={() => showFewerReviews()}>Fewer Reviews</button>
        : null}
    </div>
  )
}

export default ReviewList