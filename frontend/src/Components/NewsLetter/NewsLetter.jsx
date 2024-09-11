import React from 'react';
import './NewsLetter.css';
import Footer from '../Footer/Footer';

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our Newsletter and stay updated</p>
      <div className='newsletter-form'>
        <input type='email' placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>

      <Footer/>
    </div>

    
  );
};

export default NewsLetter;
