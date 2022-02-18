import React, { Component, useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
import axios from 'axios';

const ReviewList = ({products, product, reviews}) => {
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

        {reviews.length > displayedReviews ?
        reviews.slice(0, displayedReviews).map(review => {
          return <ReviewTile review={review} key={review.review_id} />
        })
        : reviews.map(review => {
          return <ReviewTile review={review} key={review.review_id} />
        })}

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