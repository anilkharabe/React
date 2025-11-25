import React from 'react';
import {CDN_URL} from '../utils/constants'

const RestaurantCard = (props) => {
  const { resObj } = props;  // destructuring
  const { name, cuisines, avgRating, cloudinaryImageId } = resObj?.info; //destracturing + optional chaining
  const { deliveryTime } = resObj?.info?.sla;  // optional chaining
  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        src={ CDN_URL+cloudinaryImageId }
      ></img>
      <h4>{name}</h4>
      <h5>{cuisines.join(', ')}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>Estimate: {deliveryTime} minutes</h5>
    </div>
  );
};

export default React.memo(RestaurantCard);
