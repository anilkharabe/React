import React from "react";
import { CDN_URL } from "../utils/constants";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const RestaurantCard = ({ resObj }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resObj?.info || {};
  const { deliveryTime } = resObj?.info?.sla || {};

  return (
    <Card
      sx={{
        width: 220,            // Tailwind w-52 ≈ 208px; using 220 for better MUI fit
        m: 1.5,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 2
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={CDN_URL + cloudinaryImageId}
        alt={name}
        sx={{ borderRadius: 1 }}
      />

      <CardContent sx={{ p: 2 }}>
        <Typography variant="h6" noWrap>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary" noWrap>
          {cuisines?.join(", ")}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          <StarIcon fontSize="small" sx={{ color: "gold" }} /> {avgRating} Stars
        </Typography>

        <Typography variant="body2">
          <AccessTimeIcon fontSize="small" sx={{ color: "gray" }} /> Estimate: {deliveryTime} min
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(RestaurantCard);
