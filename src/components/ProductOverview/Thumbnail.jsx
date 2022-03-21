import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const ThumbnailImage = styled.img`
  cursor: pointer;
  display: flex;
  height: 75px;
  width: 75px;
  border: 1px dotted lightgrey;
  margin: 5px;
  /* align-items: center; */
`;

const ThumbnailDiv = styled.div`
  background: hsla(15,50%,50%,0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 600px;
  margin: auto;
  width: 100px;
`;

const Thumbnail = ({ thumbnailPhotos }) => {


  const [selectedImage, setSelectedImage] = useState(thumbnailPhotos[0].thumbnail_url);

  return (

    <ThumbnailDiv>

      {thumbnailPhotos ? thumbnailPhotos.map((image, index) => (
        <ThumbnailImage src={image.thumbnail_url} key={index} alt="styles" />
      )) : null}

    </ThumbnailDiv>

  );
};


export default Thumbnail;