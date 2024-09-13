import React from 'react';
import './Breadcrum.css'
import arrow_icon from '../../assets/Assets/Frontend_Assets/breadcrum_arrow.png';

const Breadcrumb = ({ product }) => {
  if (!product) return null; // Handle case where product is undefined

  return (
    <div className='breadcrumb'>
      HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category}
      <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
};

export default Breadcrumb;