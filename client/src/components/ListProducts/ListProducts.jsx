import React from "react"
import "./ListProducts.css"

const ListProducts = ({ Product }) => {
	const {
		id,
		imgPath,
		productTitle,
		company,
		category,
		productQuantity,
		productMrpPrice,
		productSellingPrice,
		discount,
		availability,
		rating
	} = Product
	return (
		<div className="product-layout" key={id}>
			<div className="product-img">
				<img src={imgPath} alt="" width={70} />
			</div>
			<div className="product-details">
				<h4 className="product-title">{productTitle} <span><i className="fa fa-star star" aria-hidden="true"></i><span>{rating}</span></span></h4>
				{availability === "yes" ? (
					<div className="availability">Available</div>
				) : (
					<div className="availability">Not Available</div>
				)}
				<i className="fa fa-heart icon" id="heart"></i>
				<div className="product-by">
					{company} ({category}) 
				</div>
				<div className="product-quantity">{productQuantity}</div>
				<div className="price-cart">
					<div className="product-price">
						<div className="product-our-price">
							₹{productMrpPrice - (productMrpPrice * discount) / 100}
						</div>
						<div className="product-mrp-price">
							<span>MRP</span>
							<span className="mrp-price-strike">₹{productMrpPrice}</span>({discount}% OFF)
						</div>
					</div>
					<button className="btn-cart" onClick={() => handleCartClick(Product)}>
						Add Item To Cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default ListProducts
