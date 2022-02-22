import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItemView from './ProductItemView.jsx';


const GalleryDiv = styled.div`
  background-color: hsla(200,50%,70%,0.5);
  /* cursor: pointer; */
`;

const GalleryButton = styled.button`
  cursor: pointer;
`;

const ProductGallery = ({ productImages, onHandleImageClick }) => {

  const [photo,setPhoto] = useState(productImages);


  return (

    <GalleryDiv>

      <GalleryButton onClick={onHandleImageClick}><em>EXPAND VIEW</em></GalleryButton>

      <br /><br />

      <GalleryButton className="left-button" onClick={() => console.log('PREVIOUS STYLE PHOTO')}>PREVIOUS STYLE PHOTO</GalleryButton>

      {console.log('GALLERY PHOTO', productImages)}
      <ProductItemView photo={productImages} onHandleImageClick={onHandleImageClick} /> ohhhhh shit

      <br />

      <GalleryButton className="right-button" onClick={() => console.log('NEXT STYLE PHOTO')}>NEXT STYLE PHOTO</GalleryButton>

    </GalleryDiv>

  );
};


export default ProductGallery;