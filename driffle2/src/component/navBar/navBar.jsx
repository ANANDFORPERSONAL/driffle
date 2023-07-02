import React from 'react';
import './navBar.css';
import Logo from "../logo/logo";
import regionIcon from '../../assets/region.png';
import like from '../../assets/like.png';
import cart from '../../assets/cart.png';
import profile from '../../assets/profile.png';


const NavBar = () => {
return (
<div className="navbar">
    <Logo />
    <div className="right-elements">
        <div className="region">
        <img src={regionIcon} alt="Region Icon" />
        </div>
        <div className="wishlist">
        <img src={like} alt="Like" />
        </div>
        <div className="cart">
        <img src={cart} alt="cart" />
        </div>
        <div className="profile">
        <img src={profile} alt="Profile" />
        </div>

    </div>
  </div>
);
};

export default NavBar;
