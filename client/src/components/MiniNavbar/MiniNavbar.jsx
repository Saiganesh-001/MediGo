import React from "react";
import { NavLink } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const MiniNav = styled(Stack)(({ theme }) => ({
  marginTop: "4.2rem",
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "rgb(196, 189, 189)",
}));

const MiniNavLayout = styled("ul")(({ theme }) => ({
  display: "flex",
  width: "100vw",
  fontSize: "1.1rem",
  margin: "10px 20px",
  position: "relative",
  gap: "3rem",
  listStyle: "none",
  justifyContent: "center",
  padding: 0,
}));

const MiniNavItems = styled(Button)(({ theme }) => ({
  color: "black",
  padding: "4px 10px",
  borderRadius: "25px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#08A1A1",
    color: "aliceblue",
    transition: "0.3s all ease",
  },
  "&.active": {
    color: "#08A1A1",
    "&:hover":{
      color: "white"
    }
  },
}));

const MiniNavbar = () => {
  return (
    <MiniNav direction="row">
      <MiniNavLayout>
        <li>
          <MiniNavItems
            component={NavLink}
            to="/beauty-products"
          >
            Beauty Products
          </MiniNavItems>
        </li>
        <li>
          <MiniNavItems
            component={NavLink}
            to="/health-products"
          >
            Healthcare Products
          </MiniNavItems>
        </li>
        <li>
          <MiniNavItems
            component={NavLink}
            to="/fitness-products"
          >
            Fitness Products
          </MiniNavItems>
        </li>
        <li>
          <MiniNavItems
            component={NavLink}
            to="/MyWishlist"
          >
            My Wishlist
          </MiniNavItems>
        </li>
        <li>
          <MiniNavItems
            component={NavLink}
            to="/ContactForm"
          >
            Contact Form
          </MiniNavItems>
        </li>
      </MiniNavLayout>
    </MiniNav>
  );
};

export default MiniNavbar;
