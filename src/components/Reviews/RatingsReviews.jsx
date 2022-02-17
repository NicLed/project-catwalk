import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './Components/ReviewList.jsx';
import RatingSummary from './Components/RatingSummary.jsx';

const RatingsReviews = ({products, product}) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState({});
  // could make get request to reviews api here and pass down as props depending on what components need access to it
  useEffect(() => {
    getReviews();
    getReviewsMetaData();
  }, [])

  const getReviews = () => {
    axios.get(`/reviews/${product.id}`)
      .then((response) => {
        console.log("reviews response", response.data);
        setReviews(response.data.results)
      })
      .catch((error) => {
        throw new Error(error);
      })
  }

  const getReviewsMetaData = () => {
    axios.get(`/reviews/meta/${product.id}`)
      .then((response) => {
        console.log("reviews meta response", response.data);
        setReviewsMeta(response.data)
      })
      .catch((error) => {
        throw new Error(error);
      })
  }

  return (
    <>
      {Object.keys(reviewsMeta).length && reviews.length ?
      <>
        <RatingSummary products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} />

        <ReviewList products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} />
      </>
      : null}
    </>
  )
}

export default RatingsReviews;