import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const  [listOfResteaurants, setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5288974&lng=73.8665321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }


  return listOfResteaurants.length === 0 ? <h1>Loading/Fetching Restaurants Data...</h1> :(
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
