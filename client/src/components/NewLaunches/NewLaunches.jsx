import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import '../ProductCard/ProductCard.css';

const NewLaunches = () => {

    let newLaunchesList = [
        {
            name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
            imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
            mrp: 240,
            discount: 25,
        },
        {
            name: "Pharmeasy Posture Corrector - Corrects Bad Posture - Eases Neck, Back & Shoulder Pain - Small",
            imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G63237/pharmeasy-posture-corrector-corrects-bad-posture-eases-neck-back-shoulder-pain-small-2-1656420762.jpg?dim=1024x0",
            mrp: 999,
            discount: 50,
        },
        {
            name: "Sugar Pop Nourishing Lip Balm - 02 Cherry",
            imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T31617/sugar-pop-nourishing-lip-balm-02-cherry-2-1653658203.jpg?dim=320x320&dpr=1&q=100",
            mrp: 149,
            discount: 5,
        },
        {
            name: "Manforce Epic Desire Super Thin Premium Condoms, Silk Chocolate Flavor, Disposable Pouch (3 Counts)",
            imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G89746/manforce-epic-desire-super-thin-premium-condoms-silk-chocolate-flavor-disposable-pouch-3-counts-6.1-1652957426.jpg?dim=1024x0",
            mrp: 80,
            discount: 15,
        },
        {
            name: "Kellogg'S Froot Loops Original 285g Box",
            imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/E65383/kelloggs-froot-loops-original-285g-box-2-1644845403.jpg?dim=1024x0",
            mrp: 185,
            discount: 0,
        },
        {
            name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
            imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
            mrp: 240,
            discount: 25,
        },
    ];

    return (
        <div className="new-launches container">
            <div className="title">New Launches</div>
            <div className="subtitle">New wellness range just for you !</div>
            <div className="product-cards">
                {newLaunchesList.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default NewLaunches
