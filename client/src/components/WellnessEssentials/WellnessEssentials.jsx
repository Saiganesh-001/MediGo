import React from 'react';
import './WellnessEssentials.css'; 

const WellnessEssentials = () => {
  const wellnessEssentialsList = [
    {
      name: "Evion 400mg Strip of 10 Capsules",
      imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1024x0",
      mrp: 35,
      discount: 10,
    },
    {
      name: "Neurobin Forte Tablet 30's",
      imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I09432/neurobion-forte-tablet-30s-2-1656661904.jpg?dim=1024x0",
      mrp: 34.7,
      discount: 10,
    },
    {
      name: "Gas O Fast Active Jeera Axtacid Sachet Of 5 G",
      imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I34550/gas-o-fast-active-jeera-antacid-sachet-of-5-g-2-1654166983.jpg?dim=1024x0",
      mrp: 10,
      discount: 15,
    },
    {
      name: "Pharmeasy Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
      imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=320x320&dpr=1&q=100",
      mrp: 54,
      discount: 15,
    },
    {
      name: "Electral Powder 21.80gm",
      imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/065285/electral-powder-2180gm-2-1653986181.jpg?dim=1024x0",
      mrp: 21.05,
      discount: 15,
    },
    {
      name: "Supradyn Daily Multivitamin Tablets 15s",
      imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=1024x0",
      mrp: 54,
      discount: 5,
    },
  ];

  const createProductList = (list) => {
    return list.map((el, index) => {
      const discountedPrice = (el.mrp / 100) * (100 - el.discount);
      const roundedPrice = (Math.round(discountedPrice * 100) / 100).toFixed(2);

      return (
        <div key={index} className="product-card">
          <img src={el.imgUrl} alt={el.name} />
          <div>
            <h4 className="name">{el.name}</h4>
            <p>MRP <span>₹{el.mrp}</span></p>
            <h4>₹{roundedPrice} <span>{el.discount}% OFF</span></h4>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="wellness-essentials container">
      <div className="title">Wellness Essentials of the Week</div>
      <h3 className="subtitle">Super charge your immunity with us</h3>
      <div className="product-cards2">
        {createProductList(wellnessEssentialsList)}
      </div>
    </div>
  );
};

export default WellnessEssentials;
