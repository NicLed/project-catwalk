import React from 'react';
import axios from 'axios';
import ReviewListEntry from './Components/ReviewListEntry.jsx';

class ReviewListv1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      reviews: []
    }

    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    // this.setState = ({
    //   id: this.props.product.id
    // })
    console.log('mount props', this.props)
    console.log('mount id', this.state.id)
  }

  // need current product_id to determine which reviews to display
  // make get request to reviews API based on product_id

  getReviews() {
    // console.log('ReviewList this', this)
    // console.log('ReviewList product', this.state.id)
    axios.get(`/API/reviews/${this.props.product.id}`)
      .then((response) => {
        console.log("reviews response", response.data);
        this.setState({
          reviews: response.data.results
        })
      })
      .catch((error) => {
        throw new Error(error);
      })
  }

  render() {
    console.log(this.props)
    if (this.state.reviews.length > 2) {
      return (
        <div>
          <h3>Reviews</h3>
          {this.state.reviews.map((review, i) => {
            return <ReviewListEntry review={review} key={i} />
          })}
          <button>More Reviews</button>
          <div>{this.props.products.campus}</div>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Reviews</h3>
          {this.state.reviews.map((review, i) => {
            return <ReviewListEntry review={review} key={i} />
          })}
        </div>
      )
    }
  }
}

export default ReviewListv1;