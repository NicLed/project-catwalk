import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Title1 = styled.h3`
  // background-color: mediumseagreen;
  color: grey;
  margin: 2% 15% 0%;
`
export const ElementDiv = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  width: auto;
  height: auto;
`
export const RIdiv = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  max-width: 50%;
  height: 80%;
  position: relative;
  margin: 5% 25% 5%;
  flex-direction: column;
  border: 1px grey solid;
  padding: 5px;
  align: center;
`

export const DivCarouselItem = styled.div`
  overflow: hidden;
`
export const DivCarousel = styled.div `
  // display: flex;
  // align-items: center;
  justify-content: space-between;
  position: relative;
  // width: 45%;
  // height: 100%;
  // background-color: green;
  // color: #fff;
`
export const DivInner = styled.div `
  white-space: nowrap;
  transition: transform 0.3s;
`
export const Carousel = styled.div`
  display: flex;
`
export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

`
//!!
export const Container0 = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 70%;
  height: 80%;
  flex-direction: row;
  border: 1px grey solid;
  padding: 5px;
  margin: 1% 15% 2%;

`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: relative;
  top: 45%;
  z-index: 5;
  cursor: pointer;
  left: 2px;
  color: black;
  height: 20px;
  width: 20px;
  align-self: center;
`

export const RightArrow = styled(FaArrowAltCircleRight)`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  z-index: 5;
  cursor: pointer;
  color: black;
  height: 20px;
  width: 20px;
`
export const SliderDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: scroll;
  position: relative;
  height: 415px;
  margin: 0px;
  padding: 0px;
  transitions: .5s;
  scroll-behavior: smooth;
`;