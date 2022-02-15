import React, {Component, useState, useEffect} from 'react';
import { Title1, Button, RIdiv } from './styles.js';
import axios from 'axios';
import Carosel from './Carosel.jsx'

export default function RelatedItems() {

  return (
    <RIdiv>
      <Title1>Related Products</Title1>
      <div>
        <Carosel/>
        <li>
          <ul> Lorem ipsum</ul>
          <ul> Lorem ipsum</ul>
          <ul> Lorem ipsum</ul>
          <ul> Lorem ipsum</ul>
        </li>
      </div>
    </RIdiv>
  )
}
