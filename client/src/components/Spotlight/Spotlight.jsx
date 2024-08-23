import React from 'react';
import './Spotlight.css';

const spotlightList = [
    {
        name: "Evion 400mg Strip of 10 Capsules",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1024x0",
        mrp: 35,
        discount: 10,
    },
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

const productPromo = [
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/19a254ab992-SB.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/1588d37d1d8-Toothsi-Creative-min.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/e695cfa1018-Sevenseas-SRPbanner.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/68a6834f2f5-Nycil_July2022_min.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/e65a05f443f-Livogen-SRPbanner.jpg?dim=1024x0",
    },
];

const Spotlight = () => {
    return (
        <div className="spotlight container">
            <h1 className="title">Spotlight</h1>
            <div className="product-cards">
                {spotlightList.map((product, index) => {
                    const price = ((product.mrp / 100) * (100 - product.discount)).toFixed(2);
                    return (
                        <div key={index} className="product-card">
                            <img src={product.imgUrl} alt={product.name} />
                            <div className="product-info">
                                <h4 className="name">{product.name}</h4>
                                <p>MRP <span>₹{product.mrp}</span></p>
                                <h4>₹{price} <span>{product.discount}% OFF</span></h4>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="product-promo">
                {productPromo.map((promo, index) => (
                    <img key={index} src={promo.imgUrl} alt={`Promo ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Spotlight;
