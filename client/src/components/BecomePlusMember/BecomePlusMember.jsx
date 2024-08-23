import React from 'react';
import './BecomePlusMember.css';

const BecomePlusMember = () => {
  return (
    <div className="become-plus-member">
      <div>
        <h2>Become a <span><i className="fa-solid fa-plus"></i> Plus</span> member</h2>
        <p>And enjoy extra bachat on every order</p>
        <hr />
      </div>
      <div>
        <p>Save flat 5% extra on medication & enjoy Free delivery with Plus Membership</p>
        <button>Explore Now <i className="fa-solid fa-angle-right"></i></button>
      </div>
      <div>
        <img
          src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1024x0"
          alt="Plus Family"
        />
      </div>
    </div>
  );
};

export default BecomePlusMember;
