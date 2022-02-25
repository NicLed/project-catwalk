import React, {useState, useEffect} from 'react';
import moment from 'moment';
import StarDisplayReview from './StarDisplayReview.jsx';
import RatingHelpfulness from './RatingHelpfulness.jsx';
import styled from 'styled-components';
import StarRating from './StarRating.jsx';

const Tile = styled.div`
  border-bottom: 1px solid #525252;
  margin-bottom: 20px;
`

const ImageContainer = styled.div`
  display: flex;
`
const Thumbnail = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`

const ReviewTile = ({ review, displayLargeImage, getReviews, productID }) => {

  return (
    <Tile>
      <StarDisplayReview review={review} />
      {/* <StarRating /> */}
      <h4>{review.reviewer_name}</h4>
      <div>{moment(review.date).format('LL')}</div>
      <h3>{review.summary}</h3>
      <div>{review.body}</div>
      <br></br>
      <ImageContainer>
      {review.photos.map((photo, i) => {
        return <Thumbnail src={photo.url} key={i} onClick={displayLargeImage}></Thumbnail>
      })}
      </ImageContainer>
      <br></br>
      {review.recommend ?
      <div>I recommend this product</div> // add checkmark
      : null}
      <br></br>
      {review.response ? <div>Response: {review.response}</div> : null}
      <br></br>
      <RatingHelpfulness review={review} getReviews={getReviews} productID={productID} />
    </Tile>
  )
}

export default ReviewTile;