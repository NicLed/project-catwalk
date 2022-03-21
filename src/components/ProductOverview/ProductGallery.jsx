import React, { useState, useEffect } from 'react';
import styled ,{keyframes} from 'styled-components';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaDirections } from 'react-icons/fa';


const GallerySection = styled.section`
  align-items: center;
  /* background-color: hsla(100,40%,60%,0.5); */
  cursor: pointer;
  display: flex;
  height: 700px;
  justify-content: center;
  position: relative;
  width: 550px;
  `;

const ImageDiv = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  /* float: right; */
  height: 550px;
  justify-content: center;
  margin: 30px 15px 5px 5px;
  position: absolute;
  width: 550px;
  `;

const GalleryButton = styled.button`
  cursor: pointer;
`;

const galleryFadeIn = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0.75;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const ItemImage = styled.img`
  animation: ${galleryFadeIn} 1s linear;
  border-radius: 10px;
  box-shadow: 2px 2px 2px;
  max-height: 550px;
  max-width: 500px;
  position: absolute;
  transition: 1s ease;

  &:hover {
    opacity: 50%;
  }
`;

const LeftArrow = styled(FaArrowAltCircleLeft)`
  color: #e9e6e6;
  cursor: pointer;
  font-size: 3rem;
  left: 10px;
  position: absolute;
  top: 50%;
  user-select: none;
  z-index: 10;
`;

const RightArrow = styled(FaArrowAltCircleRight)`
  color: #e9e6e6;
  cursor: pointer;
  font-size: 3rem;
  right: 10px;
  position: absolute;
  top: 50%;
  user-select: none;
  z-index: 10;
`;

// THUMBNAIL
const ThumbnailImage = styled.img`
  /* align-items: center; */
  border: 1px dotted lightgrey;
  border-radius: 20%;
  cursor: pointer;
  display: flex;
  height: 75px;
  margin: 5px;
  width: 75px;

  &:hover {
    opacity: 50%;
  }
`;

const ThumbnailDiv = styled.div`
  background: hsla(100,40%,60%,0.5);
  border: 1px solid lightgrey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 475px;
  margin: auto;
  -ms-overflow-style: none;
  overflow-y: scroll;
  scrollbar-width: none;
  width: 100px;

  &::-webkit-scrollbar {
    box-shadow: inset 0 0 5px lightgrey;
    display: none;
  }
`;


const ProductGallery = ({ setSelectedImage, selectedImage, currentProduct, productImages, styleID, stylesAll, currentStyle, onHandleImageClick, setExpandedView, expandedView, imageIndex, setImageIndex }) => {

  const [current, setCurrent] = useState(0);
  const length = productImages.length;
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setImageIndex(current);
  };

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setImageIndex(current);
  };

  if (productImages.length <= 0 || !Array.isArray(productImages)) { return null };


  return (

    <>

      {/* {console.log('currentINDEXXXXXXXXX: ', current)}
      {console.log('currentSTYLEEEEEEEEEE: ', currentStyle)} */}
      {console.log('SELECTED IMAGESSSSSSS : ', productImages)}

      <ThumbnailDiv className="thumbnail-container">
        {productImages ? productImages.map((image, index) => (
          <ThumbnailImage
            key={index} alt="styles"
            src={image.thumbnail_url}
            onClick={() => setSelectedImage(image.url)}
          />
        )) : null}
      </ThumbnailDiv>

      <GallerySection className="product=gallery">
        {/* <GalleryButton onClick={onHandleImageClick}><em>EXPAND VIEW</em></GalleryButton> */}

        <LeftArrow
          style={{ visibility: `${!expandedView ? 'visible' : 'hidden'}` }} className="arrow-left"
          onClick={previousImage} />
        <RightArrow
          style={{ visibility: `${!expandedView ? 'visible' : 'hidden'}` }} className="arrow-right"
          onClick={nextImage} />
        {productImages && !expandedView ? productImages.map((image, index) => {
          return (
            <ImageDiv key={index} onClick={() => {
              setSelectedImage(image.url);
              setExpandedView(!expandedView);
            }}>
              {index === current && (
                <ItemImage src={image.url} alt="" />
                // <ItemImage src={image.url} style={{border: selectedImage === image ? '4px solid blueviolet' : ''}} alt=""  />
              )}
            </ImageDiv>
          )
        }) : null}

      </GallerySection>
    </>

  );
};


export default ProductGallery;