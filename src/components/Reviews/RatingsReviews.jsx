import React, { Component, useState, useEffect } from 'react';
import ReviewList from './Components/ReviewList.jsx';
import axios from 'axios';

const RatingsReviews = (props) => {
  const [reviews, setReviews] = useState([]);
  // could make get request to reviews api here and pass down as props depending on what components need access to it
  useEffect(() => {
    getReviews();
  }, [])

  const getReviews = () => {
    axios.get(`/API/reviews/${props.product.id}`)
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
      <ReviewList products={props.products} product={props.product} reviews={reviews} />
    </>
  )
}

export default RatingsReviews;