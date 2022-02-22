import React, { Component, useState, useEffect } from 'react';

const RatingHelpfulness = ( { review } ) => {

  return (
      <div>
        Was this review helpful? -
        <a href="">Yes ({review.helpfulness})</a>
      </div>
  )
}

export default RatingHelpfulness;