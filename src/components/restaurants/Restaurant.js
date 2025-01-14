import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleOnClick = event => {
    // console.log(this.props)
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;
    // console.log(restaurant)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurantId={restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
