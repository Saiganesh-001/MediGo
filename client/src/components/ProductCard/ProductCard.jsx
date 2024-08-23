import React from "react"

const ProductCard = ({ product }) => {
	const { imgUrl, name, mrp, discount } = product
	const price = ((mrp / 100) * (100 - discount)).toFixed(2)

	return (
		<div className="product-card">
			<img src={imgUrl} alt={name} />
			<div>
				<h4 className="name">{name}</h4>
				<p>
					MRP <span>₹{mrp}</span>
				</p>
				<h4>
					₹{price} <span>{discount}% OFF</span>
				</h4>
			</div>
		</div>
	)
}

export default ProductCard
