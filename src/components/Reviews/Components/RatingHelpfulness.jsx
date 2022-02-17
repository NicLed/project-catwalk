import React, { Component, useState, useEffect } from 'react';

const RatingHelpfulness = ( { review } ) => {

  return (
    <>
      <div>Was this review helpful?</div>
      <a>Yes ({review.helpfulness})</a>
      {/* <a>No</a> */}
    </>
  )
}

export default RatingHelpfulness;