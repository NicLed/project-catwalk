import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './Components/ReviewList.jsx';
import RatingSummary from './Components/RatingSummary.jsx';

const RatingsReviews = (props) => {
  const [reviews, setReviews] = useState([]);
  // could make get request to reviews api here and pass down as props depending on what components need access to it
  useEffect(() => {
    getReviews();
  }, [])

  const getReviews = () => {
    axios.get(`/reviews/${props.product.id}`)
      .then((response) => {
        console.log("reviews response", response.data);
        setReviews(response.data.results)
      })
      .catch((error) => {
        throw new Error(error);
      })
  }

  const getReviewsMetaData = () => {
    axios.get(`/reviews/meta/${props.product.id}`)
      .then((response) => {
        console.log("reviews response", response.data);
        setReviews(response.data.results)
      })
      .catch((error) => {
        throw new Error(error);
      })
  }

  return (
    <>
      <RatingSummary products={props.products} product={props.product} reviews={reviews} />
      <ReviewList products={props.products} product={props.product} reviews={reviews} />
    </>
  )
}

export default RatingsReviews;