import { useContext, useState } from "react";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { listOfResteaurants,
    filteredRestaurants,
    setFilteredRestaurants } = useRestaurantList();

  const ResturantCardDiscount = withDiscountLabel(RestaurantCard);

  const{setUserName, loggedInUser} = useContext(UserContext);


  function isEmptyObject(obj) {
  // Check if the object is null or undefined first
  if (obj === null || typeof obj === 'undefined') {
    return false; // Or handle as an error, depending on requirements
  }
  return Object.keys(obj).length === 0;
}


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
        <div>
          <label> UserName : </label>
          <input className="border rounded-sm" value={loggedInUser} onChange= {(e)=>setUserName(e.target.value)}></input>
        </div>

      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((res) => {
          return <Link to={'/restaurant/' + res.id + '/'} key={res._id}>

            {/* {isEmptyObject(res.info.aggregatedDiscountInfoV2) ? <RestaurantCard resObj={res} /> : <ResturantCardDiscount resObj={res}  />} */}

            <RestaurantCard resObj={res} key={res._id} /> </Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
