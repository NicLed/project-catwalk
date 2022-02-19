import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItemView from './ProductItemView';


const ProductGallery = () => {

  return (

    <div>
      <button className="left-button"></button>
      <ProductItemView />
      <button className="right-button"></button>
    </div>

  );
};


export default ProductGallery;