import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

// MUI Components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const {
    listOfResteaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  } = useRestaurantList();

  if (listOfResteaurants.length === 0)
    return <Typography variant="h5">Loading/Fetching Restaurants Data...</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      {/* Search + Top Rated Section */}
      <Box sx={{ display: "flex", gap: 2, mb: 4, alignItems: "center" }}>
        
        {/* Search Input */}
        <TextField
          label="Search Restaurants"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Search Button */}
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            const filteredList = listOfResteaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </Button>

        {/* Top Rated Button */}
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            const filteredList = listOfResteaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </Button>
      </Box>

      {/* Restaurant Cards Grid */}
      <Grid container spacing={2}>
        {filteredRestaurants.map((res) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={res.info.id}>
            <Link
              to={`/restaurant/${res.info.id}/${res.info.name}`}
              style={{ textDecoration: "none" }}
            >
              <RestaurantCard resObj={res} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Body;
