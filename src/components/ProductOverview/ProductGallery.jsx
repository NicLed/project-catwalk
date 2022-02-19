import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItemView from './ProductItemView.jsx';


const ProductGallery = ({productImages}) => {

  const [photo,setPhoto] = useState(productImages);


  // const onHandleExpand;

  return (

    <div>
      <button className="left-button"></button>
      {console.log('GALLERY PHOTO', productImages)}
      <ProductItemView photo={productImages}/>
      <button className="right-button"></button>
    </div>

  );
};


export default ProductGallery;