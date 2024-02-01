import React, { useState } from "react";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../Styles/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileopen, setMobileOpen] = useState(false);

  // handle Click drawermenu
  const handleDrawerMenu = () => {
    setMobileOpen(!mobileopen);
  };

  // menu drawer
  const menuDrawer = (
    <Box onClick={handleDrawerMenu} sx={{ textAlign: "center" }}>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 ,my:2 }}>
        DineOut
      </Typography>
      <Divider/>
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/aboutUs"}>AboutUs</NavLink>
        </li>
        <li> 
          <NavLink to={"/Menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/ContactUs"}>ContactUs</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <DinnerDiningIcon sx={{ fontSize: 40, marginRight: 1, fontWeight:400 }} />
              DineOut
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                <NavLink activeClassName="active" to="/"> Home</NavLink>
                </li>
                <li>
                <NavLink to="/aboutUs">AboutUs</NavLink>
                </li>
                <li>
                  <NavLink to="/Menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/ContactUs">ContactUs</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handleDrawerMenu}
            sx={{
              display: { xs: 'block', sm: 'none' },
              "& .MuiDrawer-paper": {
                boxSizing: 'border-box',
                width: '250px'
              }
            }}
          >
            {menuDrawer}
          </Drawer>
        </Box>
        <Box>
        <Box>
       <Toolbar/>
         </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
