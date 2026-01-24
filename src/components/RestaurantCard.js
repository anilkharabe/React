import React, { useContext } from 'react';
import {CDN_URL} from '../utils/constants'
import userContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  const { resObj } = props;  // destructuring
  const { name, cuisines, avgRating, cloudinaryImageId, deliveryTime } = resObj; //destracturing + optional chaining


  const {loggedInUser} = useContext(userContext);
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
      <h5>User : {loggedInUser}</h5>
    </div>
  );
};


// HIgher Order component (Function)
// Input => RestaurantCard(Component) =. RestaurantCardWithDiscount(component) 
export const withDiscountLabel = (RestaurantCard)=>{
  return (props)=>{
    const {aggregatedDiscountInfoV3: discount} = props.resObj.info;
    return (
      <div>
        <label className='absolute bg-black text-white my-[11px] mx-2.5 p-2 rounded-lg'>{discount?.header} {discount?.subHeader} </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default React.memo(RestaurantCard);
