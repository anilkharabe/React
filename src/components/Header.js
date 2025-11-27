import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import {btnStyle} from '../utils/styles'

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{ bgcolor: "#fee2e2" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box>
          <Box component="img" src={LOGO_URL} alt="logo" sx={{ width: 140 }} />
        </Box>

        {/* Navigation */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>

          <Button component={Link} to="/about" color="inherit">
            About Us
          </Button>

          <Button component={Link} to="/contact" color="inherit">
            Contact Us
          </Button>

          <Button component={Link} to="/grocery" color="inherit">
            Grocery
          </Button>

          <Button component={Link} to="/poc" color="inherit">
            POC
          </Button>

          <Typography variant="body1">Cart</Typography>

          {/* Login/Logout Button */}
          <Button
            variant="contained"
            // color="error"
            sx={btnStyle}
            onClick={() =>
              setBtnNameReact((prev) =>
                prev === "Logout" ? "Login" : "Logout"
              )
            }
          >
            {btnNameReact}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
