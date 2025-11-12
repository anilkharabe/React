import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const  [listOfResteaurants, setListOfRestaurants] = useState(resList)


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {

            const filteredList = listOfResteaurants.filter(res=>{
              return res.info.avgRating > 4.5;
            });

            setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
        
      </div>
      <div className="restaurant-container">
        {listOfResteaurants.map((res) => {
          return <RestaurantCard resObj={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
