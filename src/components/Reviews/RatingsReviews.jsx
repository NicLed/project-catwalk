import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from './Components/ReviewList.jsx';
import RatingSummary from './Components/RatingSummary.jsx';
import NewReviewModal from './Components/NewReviewModal.jsx';

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
`

const LargeImage = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
`

const RatingsReviews = ({products, product}) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [largeImage, setLargeImage] = useState(false);
  const [imageSource, setImageSource] = useState('');
  const [showNewReviewForm, setShowNewReviewForm] = useState(false);

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

  const closeLargeImage = () => {
    setLargeImage(false);
    setImageSource('');
  }

  const displayLargeImage = (e) => {
    setImageSource(e.target.src);
    setLargeImage(true);
  }

  return (
    <>

      {Object.keys(reviewsMeta).length && reviews.length ?
      <SectionsContainer>

        <Section><RatingSummary products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} /></Section>

        {largeImage ? <LargeImageModal><img src={imageSource} onClick={closeLargeImage}></img></LargeImageModal> : null}

        {showNewReviewForm ? <NewReviewModal product={product} setShowNewReviewForm={setShowNewReviewForm}/> : null}

        <Section><ReviewList products={products} product={product} reviews={reviews} reviewsMeta={reviewsMeta} displayLargeImage={displayLargeImage} setShowNewReviewForm={setShowNewReviewForm}/></Section>
      </SectionsContainer>
      : null}
    </>
  )
}

export default React.memo(RatingsReviews);