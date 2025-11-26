import React from 'react';
import {CDN_URL} from '../utils/constants'

const RestaurantCard = (props) => {
  const { resObj } = props;  // destructuring
  const { name, cuisines, avgRating, cloudinaryImageId } = resObj?.info; //destracturing + optional chaining
  const { deliveryTime } = resObj?.info?.sla;  // optional chaining
  return (
    <div className="w-52 p-2.5 m-2.5 border rounded-lg">
      <img
        className="rounded-lg"
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
