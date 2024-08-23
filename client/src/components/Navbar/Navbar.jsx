import React from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
	return (
		<div id="navbarDiv" className="navbar">
			<div className="nav">
				<NavLink className="logo" to="/">
					Medi<span>Go</span>
				</NavLink>
				<div></div>

				<div id="pick-address" className="pincode">
					<div>
						<img
							src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0"
							alt="pin-add"
						/>
						<p>Express delivery to</p>
					</div>
					<h4>390001 Vadodara</h4>
					<i className="fa-solid fa-angle-down"></i>
				</div>

				<div className="right-content"></div>

				<ul>
					<li>
						<NavLink className="Offers navItems" to="/offers">
							<i className="fa-regular fa-percent"></i>
							<p>Offers</p>
						</NavLink>
					</li>
					<li>
						<NavLink className="Cart navItems" to="/cart">
							<i className="fa-solid fa-cart-shopping"></i>
							<p>Cart</p>
							<span className="counter-number">69</span>
						</NavLink>
					</li>
					<li>
						<NavLink className="user-details navItems" to="/user-details">
							<i className="fa-solid fa-user"></i>
							<p>Saiganesh</p>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
