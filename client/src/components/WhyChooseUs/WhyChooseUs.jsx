import React from 'react';
import './WhyChooseUs.css';

const whyChooseUsData = [
    {
        imgUrl: "https://assets.pharmeasy.in/apothecary/images/family.svg?dim=96x0",
        title: "46 Million+",
        description: "Registered users as of Jan 31, 2023",
    },
    {
        imgUrl: "https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=96x0",
        title: "50 Million+",
        description: "Orders on pharmacy till date",
    },
    {
        imgUrl: "https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=96x0",
        title: "452011+",
        description: "Unique items sold last 3 months",
    },
    {
        imgUrl: "https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=96x0",
        title: "452001+",
        description: "Pin code services last 3 months",
    },
];

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us container">
            <h1 className="title">Why Choose Us?</h1>
            <div>
                {whyChooseUsData.map((item, index) => (
                    <div key={index}>
                        <img src={item.imgUrl} alt={item.title} />
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
