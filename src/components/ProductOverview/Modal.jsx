import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const ModalDiv = styled.figure`
 animation-name: custom;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-duration: .5s;
  background-color: rgba(0,0,0,0.5);
  background-repeat: no-repeat;
  /* background: hsla(100,90%,80%,0.5); */
  border: 1px dotted lightgrey;
  display: flex;
  justify-content: center;
  height: 90vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const ModalImage = styled.img`
  border: 3px solid lightgrey;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
  cursor: pointer;
  display: block;
  margin: 50px auto;
  max-height: 100%;
  max-width: 100%;
`;


const Modal = ({ selectedImage, setSelectedImage, expandedView, setExpandedView }) => {

  const onHandleModalClick = (event) => {
    if (event.target.classList.contains("modal-expanded")) {
      event.preventDefault()
      setSelectedImage(null);
      setExpandedView(!expandedView);
    }
  };

  return (

    <ModalDiv className="modal-expanded" onClick={onHandleModalClick}>

      <ModalImage src={selectedImage} alt="" />

    </ModalDiv>

  );
};



export default Modal;