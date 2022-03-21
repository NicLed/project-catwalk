import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarRating from './StarRating.jsx';

const ReviewModal = styled.div`
  z-index: 1;
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: solid, black;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
  display: flex;
  justify-content: center;
`

const CloseModal = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
`

const FormContainer = styled.div`
  background-color: white;
  width: 500px;
  height: 840px;
  border-radius: 20px;
  border: 2px solid black;
`
const FormLabel = styled.div`
  margin-bottom: 10px;
  margin-left: 10px;
`

const StarContainer = styled.div`
  display: flex;
  margin-left: 5px;
`

const FormTitle = styled.h2`
  display: flex;
  justify-content: center;
`

const FormSubTitle = styled.h4`
  display: flex;
  justify-content: center;
`

const NewReviewModal = ({ product, setShowNewReviewForm }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [starRating, setStarRating] = useState(0);

  const closeModal = () => {
    setShowNewReviewForm(false);
  }

  const onMouseEnter = (starValue) => {
    setHoverRating(starValue);
  }

  const onMouseLeave = () => {
    setHoverRating(0);
  }

  const onSaveRating = (starValue) => {
    setStarRating(starValue);
  }

  return (
    <ReviewModal>
      <FormContainer>
        <CloseModal onClick={closeModal}>&times;</CloseModal>
        <FormTitle>Write Your Review</FormTitle>
        <FormSubTitle>About the {product.name}</FormSubTitle>
        <form>
          <FormLabel>Overall rating*:
            <StarContainer>
              {[1, 2, 3, 4, 5].map((starValue) => {
                return (
                  <StarRating
                    key={starValue}
                    starValue={starValue}
                    starRating={starRating}
                    hoverRating={hoverRating}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onSaveRating={onSaveRating} />)
              })}
            </StarContainer>
          </FormLabel>
          <br></br>
          <FormLabel required={true}>Do you recommend this product?*:
            <label>Yes</label>
            <input type="radio" name="recommend"></input>
            <label>No</label>
            <input type="radio" name="recommend"></input>
          </FormLabel>
          <br></br>
          <FormLabel>Characteristics*:</FormLabel>
          <FormLabel required={true}>Size:
            <input type="radio" name="Size"></input>
            <input type="radio" name="Size"></input>
            <input type="radio" name="Size"></input>
            <input type="radio" name="Size"></input>
            <input type="radio" name="Size"></input>
          </FormLabel>
          <br></br>
          <FormLabel required={true}>Width:
            <input type="radio" name="Width"></input>
            <input type="radio" name="Width"></input>
            <input type="radio" name="Width"></input>
            <input type="radio" name="Width"></input>
            <input type="radio" name="Width"></input>
          </FormLabel>
          <br></br>
          <FormLabel required={true}>Comfort:
            <input type="radio" name="Comfort"></input>
            <input type="radio" name="Comfort"></input>
            <input type="radio" name="Comfort"></input>
            <input type="radio" name="Comfort"></input>
            <input type="radio" name="Comfort"></input>
          </FormLabel>
          <br></br>
          <FormLabel required={true}>Quality:
            <input type="radio" name="Quality"></input>
            <input type="radio" name="Quality"></input>
            <input type="radio" name="Quality"></input>
            <input type="radio" name="Quality"></input>
            <input type="radio" name="Quality"></input>
          </FormLabel>
          <br></br>
          <FormLabel required={true}>Length:
            <input type="radio" name="Length"></input>
            <input type="radio" name="Length"></input>
            <input type="radio" name="Length"></input>
            <input type="radio" name="Length"></input>
            <input type="radio" name="Length"></input>
          </FormLabel>
          <br></br>
          <FormLabel required={true}>Fit:
            <input type="radio" name="Fit"></input>
            <input type="radio" name="Fit"></input>
            <input type="radio" name="Fit"></input>
            <input type="radio" name="Fit"></input>
            <input type="radio" name="Fit"></input>
          </FormLabel>
          <br></br>
          <FormLabel>Review summary:
            <input type="text" placeholder="Example: Best purchase ever!" maxLength="60"></input>
          </FormLabel>
          <br></br>
          <FormLabel>Review body*:
            <input type="text" placeholder="Why did you like the product or not?" maxLength="1000" required={true}></input>
          </FormLabel>
          <br></br>
          <FormLabel>Upload your photos:
            <button>Click to upload</button>
          </FormLabel>
          <br></br>
          <FormLabel>What is your nickname?*:
            <input type="text" maxLength="60" placeholder="Example: jackson11!" required={true}></input>
            <br></br>
            <span>For privacy reasons, do not use your full name or email address.</span>
          </FormLabel>
          <br></br>
          <FormLabel>Your email*:
            <input type="email" maxLength="60" placeholder="Example:jackson11@email.com" required={true}></input>
            <br></br>
            <span>For authentication reasons, you will not be emailed.</span>
          </FormLabel>
          <FormLabel>
            <button>Submit Review</button>
          </FormLabel>
        </form>
      </FormContainer>
    </ReviewModal>
  )
}

export default NewReviewModal;