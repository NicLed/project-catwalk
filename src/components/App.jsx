import React, {Component} from 'react';
import { Title, Button } from '../styles/styles';
// import ReviewList from './Reviews/ReviewList.jsx';
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

  componentDidMount () {
    this.getProducts();
  }

  getProducts() {
    axios.get('/API/products')
    .then((response) => {
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
    return (
      <div>
        <Title>Project Cat Walk</Title>
        <Button>button</Button>
        {/* <Overview products={this.state.products} product={this.state.product} /> */}
        {/* <RelatedProducts products={this.state.products} product={this.state.product} /> */}
        {/* <QnA products={this.state.products} product={this.state.product} /> */}
        {/* <ReviewList products={this.state.products} product={this.state.product} /> */}
      </div>
    )
  }
}

export default App;
