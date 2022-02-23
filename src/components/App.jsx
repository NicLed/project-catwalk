import React, { useState, useEffect } from 'react';
import { Title, Button } from '../styles/styles';
import axios from 'axios';
import RatingsReviews from './Reviews/RatingsReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import requestsAPI from '../../server/requestsAPI';
import Questions from './CustomerQnA/Questions.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

const App = (props) => {
	const [product, setProduct] = useState({});
	const [products, setProducts] = useState([]);
	const [productID, setProductID] = useState(null);
	const [allProductIDs, setAllProductIDs] = useState([]);
	const [stylesAll, setStylesAll] = useState([]);

	useEffect(() => {
		getAllProducts();
    console.log('Product ID:', productID);
    console.log('Product', product);
	}, []);

	const getAllProducts = () => {
		requestsAPI
			.getAllProductIDs()
			.then(({ data }) => {
				setProducts(data);
				setProduct(data[0]);
				setProductID(data[0].id);
				setAllProductIDs(data.map((item) => item.id));
				getStyles(data[0].id);
			})
			.catch((err) => console.error(err));
	};

	const getStyles = (prod_ID) => {
		requestsAPI
			.getProductStyles(prod_ID)
			.then(({ data }) => {
				setStylesAll(data.results);
			})
			.catch((err) => console.log(`FAILED to GRAB STYLES 😟😟😟 ${err}`));
	};

	return (
		<div>
			<Title>Project Cat Walk</Title>

			{/* {console.log('APP.stylesAll: ', stylesAll)} */}

			{products.length && (
				<ProductOverview
					product={product}
					products={products}
					productID={productID}
					allProductIDs={allProductIDs}
					stylesAll={stylesAll}
					ratings={'ratings'}
				/>
			)}

			<br />
			{products.length && <RelatedItems productID={productID} />}
			<div>
				{Object.keys(product).length && products.length ? (
					<Questions products={products} product={product} />
				) : null}
			</div>
			{Object.keys(product).length && products.length ? (
				<RatingsReviews products={products} product={product} productID={productID} />
			) : null}
		</div>
	);
};

export default App;

