import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Title1, Button, RIdiv, Carousel, Container0, LeftArrow, RightArrow, ElementDiv, ListContainer, Titlediv } from './styles/styles.js';
import StarDisplayAverage from '../Reviews/Components/StarDisplayAverage.jsx';

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

export default function RelatedItems({productID, stylesAll, setProductID}) {
  // console.log("🤳>>>>>>>>" ,productID)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [relatedProductsPhotos, setRelatedProductsPhotos] = useState([])
  const [currentRelatedPhoto, setCurrentRelatedPhoto] = useState({})
  const [arrayOfIDs, setArrayOfIDs] = useState([])
  const [outfit, setOutfit] = useState([])
  const [visible, setVisible] = useState({})
  const [currentProducts, setCurrentProducts] = useState([])
  const [counter, setCounter] = useState(0)
  const [outfitCounter, setOutfitCounter] = useState(0);


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

  const addToOutfit = (id, product) => {
    console.log(id, '<<<< ID, product >>>>>', product)
    let outfitArr = outfit.slice()
    let id_arr = []
    for (let i = 0; i < outfitArr.length; i++) {
      id_arr.push(outfitArr[i].id)
    }
    console.log(id_arr)
    if(!id_arr.includes(id)) {
      outfitArr.push(product)
    }
    setOutfit(outfitArr)
  }

  const removeFromOutfit = (name, index) => {
    let outfitArr = outfit.slice();
    outfitArr.splice(index, 1)
    setOutfit(outfitArr)
  }


  // const hideButton = () => {
  //   if(visible.visability) {
  //     setVisible({ visability: false })
  //     console.log(">>>>>>> hiden <<<<<<<<<<")
  //   } else {

  //     setVisible({ visability: true })
  //     console.log(">>>>>>> shown <<<<<<<<<<")
  //   }
  // }


  const grabFour = (index) => {
    let arrOfFour = relatedProducts.slice(index, index + 4);
    return arrOfFour;
  }

  const handleArrow = (direction, section) => {
    // console.log(direction , '<<<<<<<<<< direction is here!!!', counter)
    if (direction === 'left' && section === 'related') {
      if (counter <= 0) {
        console.log( 'no elements on negative index')
        setCounter(0)
      } else if ( counter > 0) {
        setCounter(counter - 1)
      }
    } else if (direction === 'right' && section === 'related') {
      if (counter > relatedProducts.length-4) {
        // console.log( 'no more elements')
        setCounter(relatedProducts.length-4)
      } else if (counter <= 0) {
        setCounter(counter + 1)
      }
    }

    if (direction === 'left' && section === 'outfit') {
      if (outfitCounter <= 0) {
        // console.log( 'no elements on negative index')
        setOutfitCounter(0)
      } else if ( outfitCounter > 0) {
        setOutfitCounter(outfitCounter - 1)
      }
    } else if (direction === 'right' && section === 'outfit') {
      if (outfitCounter > outfit.length-4) {
        // console.log( 'no more elements')
        setOutfitCounter(relatedProducts.length-4)
      } else if (outfitCounter <= 0) {
        setOutfitCounter(outfitCounter + 1)
      }
    }


  }
  return (

    <RIdiv>
        <Titlediv>
          <Title1>RELATED PRODUCTS</Title1>
        </Titlediv>

        <Container0>
          <LeftArrow onClick={() => {handleArrow('left', 'related')}}/>

          {relatedProducts.slice(counter, counter + 4).map((element, i) => {
            // console.log(element, '<<<<<< element >>>>>>> photo', element.photo)

            return (
              <ElementDiv key={element.id} onClick={() => addToOutfit(element.id, element)}>
                <div>
                  <img src={relatedProductsPhotos[i + counter]} style={{maxWidth: '200px', maxHeight: '200px'}}></img>
                </div>
                <div> {element.category} </div>
                <div> {element.name} </div>
                <div> {`USD $${element.default_price}`} </div>
                <StarDisplayAverage average={element.reviewRating}></StarDisplayAverage>
                {/* <button onClick={() => hideButton()}>{visible.visability ? 'Enable' : 'Disable'}</button> */}
              </ElementDiv>
            )
          })}
          <RightArrow onClick={()=> handleArrow('right', 'related')}/>
        </Container0>
        <Titlediv>
          <Title1>YOUR OUTFIT</Title1>
        </Titlediv>
        <Container0>
          <LeftArrow onClick={() => {handleArrow('left', 'outfit')}}/>

          {outfit.slice(outfitCounter, outfitCounter + 4).map((element, i) => {
            return (
              <ElementDiv key={element.id} onClick={() => removeFromOutfit(element.name, i)}>
                <div>
                  <img src={element.photo} style={{maxWidth: '200px', maxHeight: '200px'}}></img>
                </div>
                <div> {element.category} </div>
                <div> {element.name} </div>
                <div> {`USD $${element.default_price}`} </div>
                <StarDisplayAverage average={element.reviewRating}></StarDisplayAverage>
              </ElementDiv>
            )
          })}
          <RightArrow onClick={()=> handleArrow('right', 'outfit')}/>
        </Container0>
     {/* </div> */}
   </RIdiv>
  )
}
