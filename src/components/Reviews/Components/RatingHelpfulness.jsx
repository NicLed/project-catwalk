import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


// Styling
const HelpfulLink = styled.a`
  color: #767676;
`



const RatingHelpfulness = ( { review, getReviews, productID } ) => {



  // PUT request to vote review helpful
  const updateHelpfulRating = () => {
    event.preventDefault()

    axios.put(`/reviews/${review.review_id}/helpful`)
    .then((response) => {
      console.log('Helloooooooooooooo')
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
      </div>
  )
}

export default RatingHelpfulness;