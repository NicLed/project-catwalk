import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';
import SortDropdown from './SortDropdown.jsx';

const InfiniteScroll = styled.div`
  max-height: 80vh;
  overflow: scroll;
`

const ReviewList = ({ products, product, productID, reviews, reviewsMeta, displayLargeImage, setShowNewReviewForm, getReviews }) => {
  const [displayedReviews, setDisplayedReviews] = useState(2);


  const showMoreReviews = () => {
    const newDisplayedReviews = displayedReviews + 2;
    setDisplayedReviews(newDisplayedReviews);
  }

  const showModal = () => {
    setShowNewReviewForm(true);
  }

  const showFewerReviews = () => {
    setDisplayedReviews(2);
  }

  return (
    <div>
      <h3> {reviews.length} Reviews, <SortDropdown productID={productID} getReviews={getReviews}/> </h3>

      <InfiniteScroll>
        {reviews.length > displayedReviews ?
          reviews.slice(0, displayedReviews).map(review => {
            return <ReviewTile review={review} key={review.review_id} displayLargeImage={displayLargeImage} getReviews={getReviews} productID={productID} />
          })
          : reviews.map(review => {
            return <ReviewTile review={review} key={review.review_id} getReviews={getReviews} productID={productID} />
          })
        }
      </InfiniteScroll>

      {reviews.length >= displayedReviews ?
        <button onClick={() => showMoreReviews()} >More Reviews</button>
        : null}

      {displayedReviews > 2 ?
        <button onClick={() => showFewerReviews()}>Fewer Reviews</button>
        : null}

      <button onClick={showModal}>Add a Review +</button>

    </div>
  )
}

export default ReviewList
