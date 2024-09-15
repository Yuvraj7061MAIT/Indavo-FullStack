import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import add_product_icon from '../../../assets/Product_Cart.svg';
import list_product_icon from '../../../assets/Product_list_icon.svg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='addproduct' style={{ textDecoration: 'none' }}>
        <div className='sidebar-add-product'>
          <img src={add_product_icon} alt='Add Product' />
          <span>Add Product</span>
        </div>
      </Link>

      <Link to='listproduct' style={{ textDecoration: 'none' }}>
        <div className='sidebar-add-product'>
          <img src={list_product_icon} alt='List Product' />
          <span>Product List</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
