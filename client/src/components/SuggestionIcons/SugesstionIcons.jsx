import React from "react"
import "./SugesstionIcons.css"

const cardData = [
	{
		imgSrc:
			"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
		altText: "Medicine",
		title: "Medicine",
		discount: "Upto 50% off",
	},
	{
		imgSrc:
			"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
		altText: "Healthcare",
		title: "Healthcare",
		discount: "Upto 80% off",
	},
	{
		imgSrc:
			"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
		altText: "Lab Test",
		title: "Lab Test",
		discount: "Upto 70% off",
	},
	{
		imgSrc:
			"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
		altText: "Health Blog",
		title: "Health Blog",
		discount: "",
	},
	{
		imgSrc:
			"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
		altText: "Plus",
		title: "Plus",
		discount: "Save 5% Extra",
	},
	{
		imgSrc:
			"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
		altText: "Offers",
		title: "Offers",
		discount: "",
	},
	{
		imgSrc:
			"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",
		altText: "Sugerless",
		title: "Sugerless",
		discount: "",
	},
	{
		imgSrc:
			"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
		altText: "Value Store",
		title: "Value Store",
		discount: "Upto 50% off",
	},
]

const SugesstionIcons = () => {
	return (
		<div className="nav-card-layout container">
			<div>
				{cardData.map((card, index) => (
					<div key={index}>
						<img src={card.imgSrc} alt={card.altText} />
						<h4>{card.title}</h4>
						{card.discount && <p>{card.discount}</p>}
					</div>
				))}
			</div>
		</div>
	)
}

export default SugesstionIcons
