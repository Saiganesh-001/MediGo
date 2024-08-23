import React from 'react';
import './FrequentlyBookedLabTests.css'; // Assuming you save the CSS as FrequentlyBookedLabTests.css

const FrequentlyBookedLabTests = () => {
  const freqBookedLabTestList = [
    {
      discount: 60,
      name: "Post Pradndial Blood Sugar (PPBS)",
      description: "Measure your blood sugar levels after last meal",
      mrp: 500,
      price: 199,
      imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/b4682c3fb22d39479c6d7a4a481e5ae5.png?dim=96x0",
    },
    {
      discount: 64,
      name: "Comprehensive Full Body Checkup with Vitamin D & B12",
      description: "Measure Vitamin D & B12 levels and other essential parameters",
      mrp: 4199,
      price: 1499,
      imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/9fc5a0ab225a3ca2bc1702149e07f311.png?dim=96x0",
    },
    {
      discount: 71,
      name: "Random Blood Sugar (RBS)",
      description: "Testing of the blood sugar level at any time of the day",
      mrp: 350,
      price: 99,
      imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/1d842b1450b53455922a5b6de3a3a980.png?dim=96x0",
    },
    {
      discount: "PSP-D",
      name: "To assess the renal function for early detection of any kidney disease",
      description: "To assess the renal function for early detection of any kidney disease",
      mrp: "",
      price: 99,
      imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/d0c1ca33ee2637239dfed1645ed02aa8.png?dim=96x0",
    },
  ];

  return (
    <div className="freq-booked-lab-tests container">
      <h1 className="title">Frequently Booked Lab Tests <span className="view-all">View All</span></h1>
      <div className="product-banner">
        {freqBookedLabTestList.map((test, index) => (
          <div key={index} className="product-item">
            <h4 className={test.discount === "PSP-D" ? "no-discount" : ""}>
              {test.discount === "PSP-D" ? test.discount : `${test.discount}% off`}
            </h4>
            <h4>{test.name}</h4>
            <p>{test.description}</p>
            <div>
              <h4>₹{test.price} <span>{test.mrp && `₹${test.mrp}`}</span></h4>
              <img src={test.imgUrl} alt={test.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyBookedLabTests;
