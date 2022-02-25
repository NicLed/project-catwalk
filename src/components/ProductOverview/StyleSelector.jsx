import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart.jsx';

const Div = styled.div`
	display: flex;
	flex-wrap: wrap;
	font-family: "Montserrat", sans-serif;
	justify-content: center;
	margin-top: 8px;
	max-width: 400px;
`;

const StyleDiv = styled.div`
	background: hsla(100,40%,60%,0.5);
	border-radius: 15%;
	font-family: "Montserrat", sans-serif;
	height: 125px;
	margin: 12px 12px 0px 12px;
	margin: 0px;
	padding: 8px 12px 0px 12px;
`;

const StyleImage = styled.img`
	border: 2px solid;
	border-radius: 50%;
	cursor: pointer;
	margin: 4px;
	height: 68px;
	width: 68px;
	object-fit: cover;
	&:hover {
		border: 0px solid black;
		height: 72px;
		width: 72px;
	}
`;

const StyleSelector = ({ onHandleImageClick, currentProduct, productImages, styleID, stylesAll, imageIndex, setImageIndex, setSelectedImage, selectedImage, setExpandedView, expandedView, addToCart }) => {

	const [styleName, setStyleName] = useState(null);
	const [styleInfo, setStyleInfo] = useState(null);
	const [styleImages, setStyleImages] = useState(null);

	return (

		<>
			<StyleDiv className='style-selector'>
				<Div>

					<img src='' alt='' className='style-image' />
				</Div>
			</StyleDiv>

			<AddToCart addToCart={addToCart} styles={'styles'} />

		</>

	);
};


export default StyleSelector;
