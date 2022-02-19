import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StarBar = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 10px;
`

const MainBar = styled.div`
  background-color: lightgrey;
  width: 200px;
  height: 10px;
  margin-right: 5px;
`

const BarTitle = styled.a`
  margin-right: 8px;
  color: grey;
`

const AmountBar = styled.div`
  background-color: #028a00;
  max-width: ${({ width }) =>
    width};
  height: 10px;
`

const ReviewTotals = styled.div`
  width: 8px;
`
const PercentRec = styled.p`
  color: grey;
`

const RatingsBreakdown = ({ products, product, reviews, reviewsMeta }) => {
  const [percentRecommended, setPercentRecommended] = useState(null);

  useEffect(() =>{
    setPercentRecommended(calculatePercentRecommended());
  }, [])

  let averages = [];

  const totals = Object.values(reviewsMeta.ratings).reverse();
  console.log('totals', totals);
  const totalRatings = totals.reduce((previous, current) => {
    return Number(previous) + Number(current);
  })
  averages = totals.map((value) => {
    return (Number(value) / totalRatings) * 100;
  })
  console.log('averages:', averages)

  const calculatePercentRecommended = () => {
    const reviewCount = reviews.length;
    let recommendCount = 0;
    let recommendPercent;

    for (let i = 0; i < reviewCount; i++) {
      const review = reviews[i];
      if (review.recommend) {
        recommendCount++;
      }
    }

    recommendPercent = (recommendCount / reviewCount) * 100;

    return Math.round(recommendPercent);
  }

  return (
    <>
      {averages.map((average, i) => {
        let number = 5 - i
        average = average + '%'

        return (
          <StarBar key={number}>
            <BarTitle href="" key={number}>{number} Stars</BarTitle>
            <MainBar key={number + 1}>
              <AmountBar width={average} key={number}></AmountBar>
            </MainBar>
            {totals[i]}
          </StarBar>)
      })}
      <PercentRec>{percentRecommended}% of reviews recommend this product</PercentRec>
    </>
  )
}

export default RatingsBreakdown;