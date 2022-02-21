import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ReviewModal = styled.div`
  z-index: 1;
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
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

const NewReviewModal = ({ setShowNewReviewForm }) => {

  const closeModal = () => {
    setShowNewReviewForm(false);
  }

  return (
    <ReviewModal>
      <CloseModal onClick={closeModal}>&times;</CloseModal>
    </ReviewModal>
  )
}

export default NewReviewModal;