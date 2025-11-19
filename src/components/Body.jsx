import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResteaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5288974&lng=73.8665321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }


  return listOfResteaurants.length === 0 ? <h1>Loading/Fetching Restaurants Data...</h1> : (
    <div className="body">
      <div className="filter">
        <div className="search">

          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} />

          <button className="search-btn" onClick={() => {
            const filteredListOfRestaurants = listOfResteaurants.filter(res => {
               return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRestaurants(filteredListOfRestaurants);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {

            const filteredList = listOfResteaurants.filter(res => {
              return res.info.avgRating > 4.5;
            });

            setFilteredRestaurants(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>

      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((res) => {
          return <Link to={'/restaurant/' + res.info.id +'/'+ res.info.name} key={res.info.id}> <RestaurantCard resObj={res} key={res.info.id} /> </Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
