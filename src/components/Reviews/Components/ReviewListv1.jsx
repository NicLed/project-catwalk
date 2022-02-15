import React from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

class ReviewListv1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      reviews: [],

    }

    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
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
    if (this.state.reviews.length > 2) {
      return (
        <div>
          <h3>Reviews</h3>
          {this.state.reviews.map((review, i) => {
            return <ReviewTile review={review} key={i} />
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