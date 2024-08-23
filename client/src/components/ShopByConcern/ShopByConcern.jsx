import React from 'react';
import './ShopByConcern.css';

const ShopByConcern = () => {
  const concerns = [
    { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=128x0", alt: "Skin care", title: "Skin care" },
    { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=128x0", alt: "Vitamin & Supplement", title: "Vitamin & Supplement" },
    { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=128x0", alt: "Diabetes Care & Sugar Substitutes", title: "Diabetes Care & Sugar Substitutes" },
    { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=128x0", alt: "Cardiac Care", title: "Cardiac Care" },
    { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=128x0", alt: "Baby & Mom Care", title: "Baby & Mom Care" },
    { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=128x0", alt: "Covid Care", title: "Covid Care" },
    { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=128x0", alt: "Lifestyle Disorders", title: "Lifestyle Disorders" },
  ];

  return (
    <div className="shop-by-concern container">
      <h1 className="title">Shop by Concern</h1>
      <h3 className="subtitle">Products are handpicked by experts</h3>
      <div className="concerns-grid">
        {concerns.map((concern, index) => (
          <div key={index} className="concern-item">
            <img src={concern.src} alt={concern.alt} />
            <h3>{concern.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByConcern;
