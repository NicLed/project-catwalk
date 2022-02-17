import React from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

class ReviewListv1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      reviews: [],
      displayedReviews: 2
    }

    this.getReviews = this.getReviews.bind(this);
  }

  // for just displaying 2 reviews by default, set a state, displayedReviews, with number value equal to 2 by default - ternary operator
  // if number of reviews is greater than displayedReviews
  // display only the number of reviews equal to displayedReviews value
  // otherwise display all the reviews and remove the More Reviews button
  // when More Reviews is clicked
  // increase the value of displayedReviews by 2
  // if value of displayedReviews is greater than total number of reviews
  // get rid of More Reviews button

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
    return (
      <div>
        <h3>Reviews</h3>
        {this.state.reviews.length > 2 ?
          this.state.reviews.map(review => {
            return <ReviewTile review={review} key={review.review_id} />
          }) :
          this.state.reviews.map(review => {
            return <ReviewListEntry review={review} key={review.review_id} />
          })
        }
        <button>More Reviews</button>
        <div>{this.props.products.campus}</div>
      </div>
    )
  }
}

export default ReviewListv1;