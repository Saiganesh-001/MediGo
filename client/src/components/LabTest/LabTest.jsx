import React from 'react';
import './LabTest.css';

// Data for the features
const features = [
  { iconClass: "fa-regular fa-thumbs-up", text: "Recommended <br>by health experts" },
  { iconClass: "fa-solid fa-bolt-lightning", text: "Report <br>in 24 hrs" },
  { iconClass: "fa-solid fa-house", text: "Home Sample <br>Pickup" },
  { iconClass: "fa-solid fa-vial", text: "World Class <br>Technologies & Labs" },
  { iconClass: "fa-solid fa-shield", text: "Highly Skilled <br>Technician" },
  { iconClass: "fa-solid fa-ribbon", text: "100% safe <br>Hygienic" }
];

// Data for the images
const images = [
  { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e9fec637561-Vitamins.jpg?dim=256x0", alt: "Vitamins" },
  { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/f055b8d7606-Fever_Infection.jpg?dim=256x0", alt: "Fever Infection" },
  { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/0108134f09b-Health_Checkups.jpg?dim=256x0", alt: "Health Checkups" },
  { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/686b12c5c64-Heart.jpg?dim=256x0", alt: "Heart" },
  { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6c5765fb3e7-Diabetes.jpg?dim=256x0", alt: "Diabetes" },
  { src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/453e093976a-thyroid.png?dim=256x0", alt: "Thyroid" }
];

const LabTest = () => {
  return (
    <div className="lab-tests container">
      <h1 className="title">Lab Test by Health Concern</h1>
      <h3 className="subtitle">
        Powered by <img src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1024x0" alt="Thyrocare" />
      </h3>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index}>
            <i className={feature.iconClass}></i>
            <p dangerouslySetInnerHTML={{ __html: feature.text }}></p>
          </div>
        ))}
      </div>
      <div className="images">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default LabTest;
