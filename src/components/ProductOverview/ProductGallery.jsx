import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const GallerySection = styled.section`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 800px;
`;

const GalleryButton = styled.button`
  cursor: pointer;
`;

const ProductItemDiv = styled.div`
  align-items: center;
  /* background-color: hsla(10,80%,50%,0.5); */
  cursor: pointer;
  display: flex;
  float: right;
  height: 550px;
  justify-content: center;
  margin: 30px 15px 5px 5px;
  width: 700px;
`;

const ItemImage = styled.img`
  animation-name: custom;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
  border-radius: 10px;
  box-shadow: 2px 2px 2px;
  position: absolute;
  max-height: 600px;
  max-width: 700px;
  @keyframes identifier {
    0% {
      filter: blur(10px);
      opacity: 0.5;
    }
    100% {
      filter: blur(0px);
      opactiy: 1;
    }
  }
`;

// const LeftIcon = styled.icon`
//   cursor: pointer;
//   font-size: 3rem;
//   left: 40px;
//   position: absolute;
//   top: 50%;
//   user-select: none;
//   z-index: 10;
// `;

// const RightIcon = styled.I`
//   cursor: pointer;
//   font-size: 3rem;
//   right: 40px;
//   position: absolute;
//   top: 50%;
//   user-select: none;
//   z-index: 10;
// `;



const ProductGallery = ({ productImages, onHandleImageClick }) => {

  // const [photo, setPhoto] = useState(productImages);
  const [current, setCurrent] = useState(0);
  const length = productImages.length;

  if (productImages.length <= 0 || !Array.isArray(productImages)) { return null };

  const nextImage = () => setCurrent(current === length - 1 ? 0 : current + 1);

  const previousImage = () => setCurrent(current === 0 ? length - 1 : current - 1);

  console.log('CURRENT', current);
  // onClick={onHandleImageClick}


  return (

    <GallerySection className="product=gallery">
      {/* <GalleryButton onClick={onHandleImageClick}><em>EXPAND VIEW</em></GalleryButton> */}

      <FaArrowAltCircleLeft className="arrow-left" onClick={previousImage} />
      <FaArrowAltCircleRight className="arrow-right" onClick={nextImage} />



        {productImages ? productImages.map((image, index) => {
          return (
            <ProductItemDiv className={index === current ? 'gallery-active' : 'gallery'} key={index}>
              {index === current && (
                <ItemImage src={image.url} alt=""  />
                )}
            </ProductItemDiv>
        )}) : null}


    </GallerySection>
  );
};


export default ProductGallery;