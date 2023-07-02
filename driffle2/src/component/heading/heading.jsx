import React from 'react';
import './heading.css';

const Heading = () => {
  return (
    <div>
    <div className="heading">
      <div className="line1">Driffle is a <span className="highlight">one-stop shop</span></div>
      <div className="line2">for all your gaming needs.</div>
    </div>
    <div className="subheading">
      Not only do we sell games, but also offer gift cards, DLC's, and more. Driffle is a marketplace, so you can find a wide variety of items from different sellers in one place. We are committed to the future of gaming and strive to make our platform safe, affordable, and sustainable for all users. Whether you're looking for the latest releases or hard-to-find classics, you're sure to find what you're looking for on Driffle.
    </div>
    <button style={{ top: '600px', width: '178px', height: '48px', left: '626px', borderRadius: '25px', position: 'absolute', background: 'rgba(192, 192, 192, 0.4)', color: 'white', borderColor: 'grey' }}>
  Visit our store
</button>
        

    </div>
  );
};

export default Heading;
