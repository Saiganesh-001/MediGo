import React from 'react'
import './ShopCategories.css'

const categories = [
    {
        imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0",
        title: "Covid essentials",
    },
    {
        imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b4a3a67a59783e0ca738884c9acc8e7b.png?f=png?dim=256x0",
        title: "Personal care",
    },
    {
        imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/62e6d7551ecf3a5da1d2336c41cc0549.png?f=png?dim=256x0",
        title: "Health food and drinks",
    },
    {
        imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8a45f5baa68e3b72ae631003faa97bdb.png?f=png?dim=256x0",
        title: "Beauty",
    },
    {
        imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ff5aaa03881e3016bf409f85b4e328aa.png?f=png?dim=256x0",
        title: "Skin Care",
    },
    {
        imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/68ae87e29f4a3abbb8ed69fe7ecf057c.png?f=png?dim=256x0",
        title: "Home care",
    },
    {
        imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4209e1d247cd30fca1f619786fa3e9c1.png?f=png?dim=256x0",
        title: "Ayurvedic",
    },
];

const ShopCategories = () => {
    return (
        <div className="shop-categories container">
            <h1 className="title">Shop by categories</h1>
            <div>
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <img src={category.imgSrc} alt={category.title} />
                        <h4>{category.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopCategories