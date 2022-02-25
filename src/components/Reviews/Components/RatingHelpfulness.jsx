import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


// Styling
const HelpfulLink = styled.a`
  color: #767676;
  margin-right: 5px;
`



const RatingHelpfulness = ( { review, getReviews, productID } ) => {



  // PUT request to vote review helpful
  const updateHelpfulRating = () => {
    event.preventDefault();

    axios.put(`/reviews/${review.review_id}/helpful`)
    .then((response) => {
      getReviews(productID);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  const reportReview = () => {
    event.preventDefault();

    axios.put(`reviews/${review.review_id}/report`)
    .then((reponse) => {
      getReviews(productID);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  // Rendered components
  return (
      <div>
        Was this review helpful? -
        <HelpfulLink href="" onClick={updateHelpfulRating} > Yes ({review.helpfulness})</HelpfulLink>
        <HelpfulLink href="" onClick={reportReview} > Report </HelpfulLink>
      </div>
  )
}

export default RatingHelpfulness;