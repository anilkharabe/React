import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [listOfResteaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/restaurants");
      if (!res.ok) {
        throw new Error("Failed to fetch restaurants");
      }

      const json = await res.json();

      setListOfRestaurants(json.restaurants);
      setFilteredRestaurants(json.restaurants);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    listOfResteaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    loading,
    error,
  };
};

export default useRestaurantList;
