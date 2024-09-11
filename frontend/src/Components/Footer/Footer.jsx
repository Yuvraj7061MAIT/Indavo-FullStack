import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h2>About Us</h2>
          <p>We are dedicated to bringing you the best fashion and lifestyle products. Our mission is to provide top-quality items and exceptional service.</p>
        </div>
        <div className='footer-section'>
          <h2>Quick Links</h2>
          <ul>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/privacy-policy'>Privacy Policy</a></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
