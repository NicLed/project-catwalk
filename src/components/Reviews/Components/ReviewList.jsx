import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';
import NewReviewModal from './NewReviewModal.jsx';
import SortDropdown from './SortDropdown.jsx';

const InfiniteScroll = styled.div`
  max-height: 70vh;
  overflow: scroll;
`

const ReviewList = ({ products, product, reviews, reviewsMeta }) => {
  const [displayedReviews, setDisplayedReviews] = useState(2);
  const [showNewReviewForm, setShowNewReviewForm] = useState(false);

  const showMoreReviews = () => {
    const newDisplayedReviews = displayedReviews + 2;
    setDisplayedReviews(newDisplayedReviews);
  }

  const showModal = () => {
    setShowNewReviewForm(true);
  }

  // const showFewerReviews = () => {
  //   setDisplayedReviews(2);
  // }

  return (
    <div>
      <h3> {reviews.length} Reviews, sorted by <SortDropdown /> </h3>

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

      <button onClick={showModal}>Add a Review +</button>

      {/* {reviews.length <= displayedReviews ?
        <button onClick={() => showFewerReviews()}>Fewer Reviews</button>
        : null} */}
    </div>
  )
}

export default ReviewList


// TODO Tomorrow:
// Fix infinite scroll on ReviewList
// algo for dynamic ratings bars
// fix styled-component for dynamic ratings bars