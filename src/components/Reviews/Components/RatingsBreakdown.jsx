import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StarBar = styled.div`
  display:flex;
  margin-bottom: 10px;
`

const MainBar = styled.div`
  background-color: lightgrey;
  width: 200px;
  height: 10px;
`

const BarTitle = styled.a`
  margin-right: 8px;
  color: grey;
`

const AmountBar = styled.div`
  background-color: #525252;
  max-width: ${({width}) => {
    `${width}%`}};
  // max-width: 50%;
  height: 10px;
`

const RatingsBreakdown = ({ products, product, reviews, reviewsMeta }) => {
  const [fiveStarWidthPercentage, setFiveStarWidthPercentage] = useState(0);
  const [fourStarWidthPercentage, setFourStarWidthPercentage] = useState(0);
  const [threeStarWidthPercentage, setThreeStarWidthPercentage] = useState(0);
  const [twoStarWidthPercentage, setTwoStarWidthPercentage] = useState(0);
  const [oneStarWidthPercentage, setOneStarWidthPercentage] = useState(0);
  const [starNumber, setStarNumber] = useState(['5', '4', '3', '2', '1']);

  useEffect(() => {
    calculateStarPercentages();
  }, [])

  const calculateStarPercentages = () => {
    const starRatings = Object.values(reviewsMeta.ratings);
    let mostStarRatings = Number(starRatings[0]);


    for (let i = 1; i < starRatings.length; i++) {
      if (Number(starRatings[i]) > Number(mostStarRatings)) {
        mostStarRatings = Number(starRatings[i])
      }
    }

    for (let i = 0; i < starRatings.length; i++) {
      if (i === 0) {
        setOneStarWidthPercentage((starRatings[i] / mostStarRatings) * 100);
      } else if (i === 1) {
        setTwoStarWidthPercentage((starRatings[i] / mostStarRatings) * 100);
      } else if (i === 2) {
        setThreeStarWidthPercentage((starRatings[i] / mostStarRatings) * 100);
      } else if (i === 3) {
        setFourStarWidthPercentage((starRatings[i] / mostStarRatings) * 100);
      } else if (i === 4) {
        setFiveStarWidthPercentage((starRatings[i] / mostStarRatings) * 100);
      }
    }
  }

  return (
    <>
      {starNumber.map((number) => (
      <StarBar key={number + 3}>
        <BarTitle href="" key={number + 2}>{number} Stars</BarTitle>
        <MainBar key={number + 1}>
          <AmountBar width={fourStarWidthPercentage} key={number}></AmountBar>
        </MainBar>
      </StarBar>
      ))}
    </>
  )
}

export default RatingsBreakdown;