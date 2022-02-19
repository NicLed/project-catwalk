import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const AddToCart = () => {

  return (

    <div className="add-items-cart">
      <select className="dropdown-size">
        <option>CHOOSE SIZE</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <select className="dropdown-quantity">
        <option>HOW MANY ITEMS</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <button>ADD TO CARD</button>

    </div>

  )
}


export default AddToCart;