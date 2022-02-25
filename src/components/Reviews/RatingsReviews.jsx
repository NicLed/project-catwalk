import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from './Components/ReviewList.jsx';
import RatingSummary from './Components/RatingSummary.jsx';
import NewReviewModal from './Components/NewReviewModal.jsx';

// Styling
const SectionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`

const BreakdownSection = styled.div`
  outline: grey;
  max-width: 50%;
  &:hover {
    // background-color: grey;
  }
`
const ReviewsSection = styled.div`
  width: 1000px;
`

const LargeImageModal = styled.div`
  z-index: 1;
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
  cursor: pointer;
  dislay: flex;
  justify-content: center;
  align-items: center;
  `

  const LargeImage = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  border: 2px solid black;
`



const RatingsReviews = ({productID, products, product}) => {

  // Set initial states
  const [reviews, setReviews] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [largeImage, setLargeImage] = useState(false);
  const [imageSource, setImageSource] = useState('');
  const [showNewReviewForm, setShowNewReviewForm] = useState(false);

  useEffect(() => {
    getReviews(productID);
    getReviewsMetaData(productID);
  }, [productID])


  // GET request for reviews
  const getReviews = (product_id, sortMethod) => {
    sortMethod = sortMethod || 'relevant';
    axios.get(`/reviews/${product_id}&${sortMethod}`)
      .then((response) => {
        setReviews(response.data.results)
      })
      .catch((error) => {
        throw new Error(error);
      })
  }


  // GET request for reviews meta data
  const getReviewsMetaData = (product_id) => {
    axios.get(`/reviews/meta/${product_id}`)
      .then((response) => {
        setReviewsMeta(response.data)
      })
      .catch((error) => {
        throw new Error(error);
      })
  }


  // Close modal
  const closeLargeImage = () => {
    setLargeImage(false);
    setImageSource('');
  }


  // Open modal
  const displayLargeImage = (e) => {
    setImageSource(e.target.src);
    setLargeImage(true);
  }



  // Render
  return (
    <>
      {Object.keys(reviewsMeta).length && reviews.length ?
        <SectionsContainer>

          <BreakdownSection><RatingSummary products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} /></BreakdownSection>

          {largeImage ? <LargeImageModal><LargeImage src={imageSource} onClick={closeLargeImage}></LargeImage></LargeImageModal> : null}

          {showNewReviewForm ? <NewReviewModal product={product} setShowNewReviewForm={setShowNewReviewForm} /> : null}

          <ReviewsSection><ReviewList products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} displayLargeImage={displayLargeImage} setShowNewReviewForm={setShowNewReviewForm}  getReviews={getReviews} productID={productID} /></ReviewsSection>
        </SectionsContainer>
        : null}
    </>
  )
}

export default React.memo(RatingsReviews);
