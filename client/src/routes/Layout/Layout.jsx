import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import MiniNavbar from "../../components/MiniNavbar/MiniNavbar";
import { Box } from "@mui/material";
import Searchbar from "../../components/Searchbar/Searchbar";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <Box className="layout">
      <Box className="navbar">
        <Navbar />
      </Box>
      <Box className="miniNavbar" >
        <MiniNavbar />
      </Box>
      <Box className="searchbar">
        <Searchbar/>
      </Box>
      <Box className="content" paddingTop={5}>
        <Outlet />
      </Box>
      <Box className="footer">
        <Footer/>
      </Box>
    </Box>
  );
};

export default Layout;
