import User from "./User";
import React, { useState } from "react";

// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const About = () => {
  const [countAbout, setCountAbout] = useState(0);

  console.log("Parent render called");

  return (
    <Box sx={{ my: 7 }}>
      {/* Heading */}
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
        About
      </Typography>

      <Typography variant="h5" sx={{ mb: 4 }}>
        This is About Page learning React JS
      </Typography>

      {/* Counter button */}
      <Button
        variant="contained"
        color="error"
        sx={{ p: 1.5, mr: 2 }}
        onClick={() => setCountAbout(countAbout + 1)}
      >
        Parent: Increase Count
      </Button>

      <Typography variant="h6" component="span">
        {countAbout}
      </Typography>

      <Box sx={{ mt: 4 }}>
        <User name="Dummy" />
      </Box>
    </Box>
  );
};

export default About;
