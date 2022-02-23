import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';

const HelpfulLink = styled.a`
  color: #767676;
`

const RatingHelpfulness = ( { review } ) => {

  // need to add put request to update helpfulness count in database when link is clicked

  return (
      <div>
        Was this review helpful? -
        <HelpfulLink href=""> Yes ({review.helpfulness})</HelpfulLink>
      </div>
  )
}

export default RatingHelpfulness;