import React from "react"
import "./OrderWithPrescription.css"

const OrderWithPrescription = () => {
	return (
		<div className="order-with-prescription">
			<div>
				<img
					src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1024x0"
					alt=""
				/>
				<div>
					<h3>Order with prescription</h3>
					<p>Upload prescription and we will deliver your medicine</p>
					<button>
						<i className="fa-solid fa-paperclip"></i>
						Upload
					</button>
				</div>
			</div>
			<div>
				<h4>How does this works ?</h4>
				<div>
					<div>
						<h3>1</h3>
						<p>Upload photo of you prescription</p>
					</div>
					<div>
						<h3>2</h3>
						<p>Add delivery address and place the order</p>
					</div>
					<div>
						<h3>3</h3>
						<p>We will call you you to confirm the medicines</p>
					</div>
					<div>
						<h3>4</h3>
						<p>
							Now, sit back! your medicines will get delivered at your doorstep
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderWithPrescription
