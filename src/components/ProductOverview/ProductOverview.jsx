import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductGallery from './ProductGallery';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import ProductDescription from './ProductDescription';


const ProductOverview = ({ products, product }) => {

  return (

    <div>

      <ExpandedView />

      <div className="product-overview">
        <div className="container">

          <ProductGallery product={product} />
          <div>
            <ProductInformation />
            <div>
              <h3>ProductOverview</h3>
              <StyleSelector />
              <AddToCart />
            </div>
          </div>
        </div>

        <ProductDescription />
      </div>
    </div>
  );

};


export default ProductOverview;
