import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from './Components/ReviewList.jsx';
import RatingSummary from './Components/RatingSummary.jsx';

const SectionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`

const Section = styled.div`
  outline: grey;
  max-width: 50%;
  &:hover {
    // background-color: grey;
  }
`

const RatingsReviews = ({products, product}) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState({});

  // set state here for showing new review modal
  // pass down that state and handle function to review list
  // when click add a reivew button it toggles modal state here to display modal

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
      <SectionsContainer>
        <Section><RatingSummary products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} /></Section>

        <Section><ReviewList products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} /></Section>
      </SectionsContainer>
      : null}
    </>
  )
}

export default RatingsReviews;