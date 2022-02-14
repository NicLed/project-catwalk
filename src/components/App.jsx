import React, {Component} from 'react';
import { Title, Button } from '../styles/styles';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount () {
    this.getProducts();

  }

  getProducts() {
    axios.get('/API/products')
    .then((response) => {
      // console.log('Reponse:', response.data)
      this.setState({
        products: response.data
      })
      console.log('Products', this.state.products)
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
      </div>
    )
  }
}
export default App;
