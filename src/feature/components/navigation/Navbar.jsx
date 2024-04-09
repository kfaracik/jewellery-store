import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { motion } from "framer-motion";

const pages = ["Home", "Products", "Contact", "About Us"];
const settings = ["Account", "Logout"];

export const Navbar = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AppBar
        position="static"
        style={{ backgroundColor: "#3d3d3d", borderRadius: 8 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box display="flex" alignItems="center">
              <StorefrontIcon sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                component={Link}
                to="/"
                style={{
                  textDecoration: "none",
                  fontFamily: "cursive",
                  marginLeft: "2rem",
                  display: "flex",
                  alignItems: "center",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Jewellery Store
              </Typography>
            </Box>
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === "Home" ? "" : `/${page.toLowerCase().replace(" ", "-")}`}
                color="inherit"
                style={{
                  fontWeight:
                    location.pathname === (page === "Home" ? "" : `/${page.toLowerCase().replace(" ", "-")}`) ? "bold" : "normal",
                  color:
                    location.pathname === (page === "Home" ? "" : `/${page.toLowerCase().replace(" ", "-")}`) ? "#cab273" : "#ffffff",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Tooltip title="Cart">
              <IconButton
                component={Link}
                to="/cart"
                color="inherit"
                style={{ fontWeight: "bold" }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <IconButton
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {settings.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    variant="body1"
                    component={Link}
                    to={`/${page.toLowerCase().replace(" ", "-")}`}
                    color="inherit"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};
