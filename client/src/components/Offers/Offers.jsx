import React from 'react'
import './Offers.css'

const Offers = () => {
    const offers = [
        {
            imageUrl: "https://cms-contents.pharmeasy.in/offer/37c262d84a5-25.jpg?dim=1024x0",
            description: "Flat 25% off"
        },
        {
            imageUrl: "https://cms-contents.pharmeasy.in/offer/81308cc59b5-FLAT_20.jpg?dim=1024x0",
            description: "Test - Flat 20% OFF + up to Rs.1000 suprise cashback"
        }
    ];
    return (
        <div className="new-user-offer container">
            <h1 className="title">Offers Just For You</h1>
            <div className="cards-layout">
                {offers.map((offer, index) => (
                    <div key={index}>
                        <img src={offer.imageUrl} alt="" />
                        <p>{offer.description}</p>
                    </div>
                ))}
                <div>
                    <i className="fa-solid fa-lock"></i>
                    <p>Log in to view more offers</p>
                </div>
            </div>
        </div>
    )
}

export default Offers