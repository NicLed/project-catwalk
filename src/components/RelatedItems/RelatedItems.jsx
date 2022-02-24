import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Title1, Button, RIdiv, Carousel, Container0, LeftArrow, RightArrow, ElementDiv, ListContainer } from './styles/styles.js';
import StarDisplayAverage from '../Reviews/Components/StarDisplayAverage.jsx';
import Modal from './styles/Modal.js';
import requestsAPI from '../../../server/requestsAPI.js'
import {relatedPhotos} from '../ProductOverview/ProductOverview.jsx'


const GreenContainerDiv = styled.div`
  background-color: mediumseagreen;
  height: 100px;
  width: 100px;
`
const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

export default function RelatedItems({productID, stylesAll}) {
  // console.log("🤳>>>>>>>>" ,productID)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [relatedProductsPhotos, setRelatedProductsPhotos] = useState([])
  const [currentRelatedPhoto, setCurrentRelatedPhoto] = useState({})
  const [arrayOfIDs, setArrayOfIDs] = useState([])
  // let ratingsArray = []

  // console.log('IDS Are HERE MAAAN!!! >>>>>' , arrayOfIDs)
  useEffect(() => {
    getRelatedItems(productID);
    getProductPhoto(productID);
  }, [productID])


  // getting photos
  const getProductPhoto = (id) => {

    requestsAPI.getProductStyles(id)
    .then(({data}) => {
      setCurrentRelatedPhoto(data.results[0].photos[0].url);
    })
    .catch((err) => console.log(`FAILED to GET a PHOTO from styles ${err}`))
  }

  const getRelatedItems = (id) => {

    axios.get(`/related/${id}`)
    .then((related) => {
      // making sure that incoming aray of related ids
      // does not contain dublicates
      const relatedData = related.data.filter(unique);
      setArrayOfIDs(relatedData);

      // console.log(relatedData, "RELATED DATA IS HERE!!!<<<<<<<<<<<")
      // requesting related products
      const relatedPromises = Promise.all(relatedData.map(itemID => {
        return axios.get(`/products/${itemID}`)

      }))
      // requesting average reviews
      const relatedReviews = Promise.all(relatedData.map(ID => {
        return axios.get(`/average-reviews/${ID}`)
      }))

      relatedReviews.then(result => {
        // initializing an array of average reviews
        let ratingsArray = [];

        result.forEach((element) => {
          ratingsArray.push(element.data.avg)
        })

        relatedPromises.then(result1 => {
          // storing related products
          const relatedItems = result1.map( element => {
            return element.data
          })

          // adding an instance of average to each related product
          for (let i = 0; i < relatedItems.length; i++) {

            relatedItems[i].reviewRating = ratingsArray[i];
          }
          setRelatedProducts(relatedItems)

          // console.log("ids before passing <<<<<<<<<<<", relatedData)

          const photoPromises = Promise.all(relatedData.map(id => {
            return requestsAPI.getProductStyles(id)
          }))


          photoPromises.then((data) => {

            const relatedPhotos = [];
            // console.log(data, 'before loop data <<<<<<<<')
            for (let i = 0; i < data.length; i++) {
              let element = data[i].data.results[0].photos[0].url;
              if (!relatedPhotos.includes(element)) {
                relatedPhotos.push(element)
              }
            }

            // console.log(relatedPhotos, "RELATED PHOTOS ARE HERE!!!!!!<<<<<<<<<<<")

            setRelatedProductsPhotos(relatedPhotos)
            for (let i = 0; i < relatedItems.length; i++) {
              // console.log(ratingsArray[i])
              relatedItems[i].photo = relatedPhotos[i]
            }
            // console.log(relatedItems, '<<<<<<<< after ading a photo!')
          })
          .catch(err => {
            console.log(err)
          })
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
  const addToOutfit = (product) => {
    console.log(`>>>${product}<<< added to the outfit`)
  }
  const removeFromOutfit = (product) => {
    console.log(`>>>${product}<<< removed from the outfit`)
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
            // let picture = !element.photo ?
            // 'https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg' :
            // element.photo;
            // console.log("PICTURE IS HERE >>>>>", picture)
            return (
              <ElementDiv key={element.id} onClick={() => addToOutfit(element.name)}>
                <div>
                  <img src={relatedProductsPhotos[i]} style={{maxWidth: '200px', maxHeight: '200px'}}></img>
                </div>
                <div> {element.category} </div>
                <div> {element.name} </div>
                <div> {`$${element.default_price}`} </div>
                <StarDisplayAverage average={element.reviewRating}></StarDisplayAverage>
              </ElementDiv>
            )
          })}
          <RightArrow/>
        </Container0>
        <Title1>YOUR OUTFIT</Title1>
        <Container0>
          <LeftArrow/>

          {relatedProducts.map((element, i) => {
            return (
              <ElementDiv key={element.id} onClick={() => removeFromOutfit(element.name)}>
                <div>
                  <img src={relatedProductsPhotos[i]} style={{maxWidth: '200px', maxHeight: '200px'}}></img>
                </div>
                <div> {element.category} </div>
                <div> {element.name} </div>
                <div> {`$${element.default_price}`} </div>
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
