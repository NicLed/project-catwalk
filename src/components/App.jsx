import React, { Component } from 'react';
import { Title, Button } from '../styles/styles';
import ReviewListv1 from './Reviews/ReviewListv1.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {}
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get('/API/products')
      .then((response) => {
        console.log()
        this.setState({
          products: response.data,
          product: response.data[0]
        })
      })
      .catch((error) => {
        throw new Error(error);
      })
  }

  render() {
    // console.log('blah', this.state.product)
    return (
      <div>
        <Title>Project Cat Walk</Title>
        <Button>button</Button>
        {/* <Overview products={this.state.products} product={this.state.product} /> */}
        {/* <RelatedProducts products={this.state.products} product={this.state.product} /> */}
        {/* <QnA products={this.state.products} product={this.state.product} /> */}
        {Object.keys(this.state.product).length && this.state.products.length ? <ReviewListv1 products={this.state.products} product={this.state.product} /> : null}
      </div>
    )
  }
}

export default App;
