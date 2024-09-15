import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import Listproduct from '../../Components/ListProduct/Listproduct';

const Admin = () => {
  return (
    <div className='Admin'>
      <Sidebar />
      <div className='content'> {/* Add content wrapper for layout */}
        <Routes>
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='listproduct' element={<Listproduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
