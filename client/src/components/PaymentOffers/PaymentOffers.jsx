import React from 'react';
import './PaymentOffers.css'; // Assuming you save the CSS as PaymentOffers.css

const PaymentOffers = () => {
  const paymentOfferList = [
    {
      name: "Amazon Pay",
      imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/1412bb76dee-AMAZONPAY.jpg?dim=1440x0",
    },
    {
      name: "Paytm",
      imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/bb9b358232d-PAYTM-02.jpg?dim=1440x0",
    },
    {
      name: "MobiKwik",
      imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/2a0795e595e-MOBIKWIK.jpg?dim=1440x0",
    },
    {
      name: "Ola Money",
      imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/a20dea5ddad-OLA-MONEY-02.jpg?dim=1024x0",
    },
    {
      name: "Freecharge",
      imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/e1bf5c7dae5-FREECHARGE-02.jpg?dim=1024x0",
    },
    {
      name: "Airtel Payment",
      imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/7297689b914-AIRTEL.jpg?dim=1024x0",
    },
  ];

  return (
    <div className="payment-offers container">
      <h1 className="title">Payment Offers</h1>
      <div className="offers">
        {paymentOfferList.map((offer, index) => (
          <img key={index} src={offer.imgUrl} alt={offer.name} />
        ))}
      </div>
    </div>
  );
};

export default PaymentOffers;
