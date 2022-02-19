import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Title1, Button, RIdiv, Carousel } from './styles.js';

const GreenContainerDiv = styled.div`
  background-color: mediumseagreen;
  height: 100px;
  width: 100px;
`

export default function RelatedItems({productID}) {

  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    getRelatedItems(productID);
  }, [])

  console.log(productID);

  const getRelatedItems = (id) => {
    axios.get(`/related/${id}`)
    .then((related) => {
      console.log(related.data);
      const relatedPromises = Promise.all(related.data.map(itemID => {
        return axios.get(`/products/${itemID}`)
      }))

      relatedPromises.then(result => {
        const relatedItems = result.map( element => {
          return element.data
        })
        // console.log(relatedItems)
        setRelatedProducts(relatedItems)
      })
      .catch(err => {
        console.log(err)
      })
      // setRelatedProducts(related);

    })
    .catch((error) => {
      throw new Error(error);
    })
  }

  return (
    <RIdiv>
    {/* <div> */}
        <Title1>Related Products</Title1>
        {/* <GreenContainerDiv style={{ backgroundColor: 'aliceblue'}}/> */}
        <Carousel>
          {relatedProducts.map(element => {
            return (
              <div key={element.id}>
                <div> {element.category} </div>
                <div> {element.name} </div>
                <div> {element.default_price} </div>
                <div> {'✨✨✨✨✨'} </div>
              </div>
            )
          })}
        </Carousel>
        {/* <li>
          <ul> Lorem ipsum</ul>
          <ul> Lorem ipsum</ul>
          <ul> Lorem ipsum</ul>
          <ul> Lorem ipsum</ul>
        </li> */}
     {/* </div> */}
   </RIdiv>
  )
}
