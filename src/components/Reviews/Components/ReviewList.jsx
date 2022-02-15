import React, { Component, useState, useEffect } from 'react';

const ReviewList = (props) => {

  // getReviews() {
    // console.log('ReviewList this', this)
    // console.log('ReviewList product', this.state.id)
    // axios.get(`/API/reviews/:${this.props.product.id}`)
    //   .then((response) => {
    //     console.log("reviews response", response.data);
    //     this.setState({
    //       reviews: response.data.results
    //     })
    //   })
    //   .catch((error) => {
    //     throw new Error(error);
    //   })
  // }

  // if (this.state.reviews.length > 2) {
  return (
      <div>
        <h3>Reviews</h3>
        {/* {this.state.reviews.map((review, i) => {
          return <ReviewListEntry review={review} key={i} />
        })} */}
        <button>More Reviews</button>
      <div>{props.product.id}</div>
    </div>
  )
  // } else {
  // return (
  //   <div>
  //     <h3>Reviews</h3>
  //     {/* {this.state.reviews.map((review, i) => {
  //       return <ReviewListEntry review={review} key={i} />
  //     })} */}
  //   </div>
  // )
  // }
}

export default ReviewList