import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Title1, Button, RIdiv, Carousel, Container0, LeftArrow, RightArrow, ElementDiv } from './styles/styles.js';
import StarDisplayAverage from '../Reviews/Components/StarDisplayAverage.jsx';
import Modal from './styles/Modal.js';
import requestsAPI from '../../../server/requestsAPI.js'
import {relatedPhotos} from '../ProductOverview/ProductOverview.jsx'

const GreenContainerDiv = styled.div`
  background-color: mediumseagreen;
  height: 100px;
  width: 100px;
`

export default function RelatedItems({productID, stylesAll}) {
  // console.log("🤳>>>>>>>>" ,productID)
  console.log('PHOTOS Are HERE MAAAN!!! >>>>>' , relatedPhotos)
  const [relatedProducts, setRelatedProducts] = useState([])
  // const [relatedProductsPhotos, setRelatedProductsPhotos] = useState([])
  // const [currentRelatedPhoto, setCurrentRelatedPhoto] = useState({})

  useEffect(() => {
    getRelatedItems(productID);
    // getProductPhoto(productID);
  }, [productID])

  // getting photos
  // const getProductPhoto = (id) => {
  //   requestsAPI.getProductStyles(productID)
  //         .then((styles) => {
  //           // console.log('PHOTo is HERE >>>>>>>>>>', styles.data.results[0].photos[0].url)
  //           setCurrentRelatedPhoto(styles.data.results[0].url);
  //         })
  //         .catch((err) => console.log(`FAILED to GRAB a PHOTO ${err}`))
  // }

  const getRelatedItems = (id) => {
    // console.log('>>>>>>>>> ID IS HERE!!',id)
    axios.get(`/related/${id}`)
    .then((related) => {
      // console.log('>>>>>>>>> related data IS HERE!!', related.data);
      const relatedData = related.data;
      const relatedPromises = Promise.all(relatedData.map(itemID => {
        return axios.get(`/products/${itemID}`)
        // requestsAPI.getProductDetails(itemID)
      }))

      const relatedReviews = Promise.all(relatedData.map(ID => {
        return axios.get(`/average-reviews/${ID}`)
      }))

      relatedReviews.then(result => {
        // console.log("RATINGS✨", result)
        let ratingsArray = [];
        result.forEach((element) => {
          ratingsArray.push(element.data.avg)
        })
        relatedPromises.then(result1 => {
          // console.log(">>>>>>>>results1🎶" ,result1)
          const relatedItems = result1.map( element => {
            return element.data
          })

          for (let i = 0; i < relatedItems.length; i++) {
            // console.log(ratingsArray[i])
            relatedItems[i].reviewRating = ratingsArray[i];
          }
          // console.log(relatedItems)
          setRelatedProducts(relatedItems)
        })
        .catch(err => {
          console.log(err)
        })
      })
      .catch((error) => {
        throw new Error(error);
      })

    })
      .catch((error) => {
        throw new Error(error);
      })
  }

  return (

    <RIdiv>
    {/* <div> */}
        <Title1>RELATED PRODUCTS</Title1>
        {/* <GreenContainerDiv style={{ backgroundColor: 'aliceblue'}}/> */}
        <Container0>
          <LeftArrow/>

          {relatedProducts.map((element, i) => {
            // console.log("ELEMENT IS HERE >>>>>", element)
            return (
              <ElementDiv key={element.id}>
                <div> {element.category} </div>
                <div> {element.name} </div>
                <div> {element.default_price} </div>
                <div>
                  <img src={relatedPhotos} style={{maxWidth: '200px', maxHeight: '200px'}}></img>
                </div>
                <StarDisplayAverage average={element.reviewRating}></StarDisplayAverage>
              </ElementDiv>
            )
          })}
          <RightArrow/>
        </Container0>
        <Title1>YOUR OUTFIT</Title1>
        <Container0>
          <LeftArrow/>

          {relatedProducts.map(element => {
            return (
              <ElementDiv key={element.id}>
                <div> {element.category} </div>
                <div> {element.name} </div>
                <div> {element.default_price} </div>
                <StarDisplayAverage average={element.reviewRating}></StarDisplayAverage>
              </ElementDiv>
            )
          })}
          <RightArrow/>
        </Container0>
     {/* </div> */}
   </RIdiv>
  )
}
