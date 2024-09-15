import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';  // Ensure this path is correct
import navProfile from '../../assets/nav-profile.svg';  // Ensure this path is correct

const Navbar = () => {
  return (
    <div className='navbar'> {/* Corrected className */}
      <img src={logo} alt="Logo" className='nav-logo' />
      <img src={navProfile} alt="Profile" className='nav-profile' />
    </div>
  );
}

export default Navbar;
