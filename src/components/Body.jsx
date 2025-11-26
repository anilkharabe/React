import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { listOfResteaurants,
    filteredRestaurants,
    setFilteredRestaurants } = useRestaurantList();

  return listOfResteaurants.length === 0 ? <h1>Loading/Fetching Restaurants Data...</h1> : (
    <div className="body">
      <div className="p-4 m-4 flex">
        <div className="search">

          <input type="text" className="border rounded-sm" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} />

          <button className="bg-red-300 p-1.5 m-4 rounded-lg" onClick={() => {
            const filteredListOfRestaurants = listOfResteaurants.filter(res => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRestaurants(filteredListOfRestaurants);
          }}>Search</button>
        </div>
        <button
          className="bg-red-300 p-1.5 m-4 rounded-lg"
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
      <div className="flex flex-wrap">
        {filteredRestaurants.map((res) => {
          return <Link to={'/restaurant/' + res.info.id + '/' + res.info.name} key={res.info.id}> <RestaurantCard resObj={res} key={res.info.id} /> </Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
