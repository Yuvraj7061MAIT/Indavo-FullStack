import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null); // Renamed for clarity
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: "",
    category: '',
    new_price: '',
    old_price: '',
  });

  // Handle input changes for product details
  const handleInputChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  // Add product function
  const addProduct = async () => {
    console.log(productDetails);
    let response_data;
    let product = { ...productDetails };

    // Create FormData for the image upload
    let formData = new FormData();
    formData.append('product', image);

    try {
      // Use 'fetch' for uploading the image
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      response_data = await response.json();

      if (response.ok && response_data.success) {
        product.image = response_data.image_url;
        console.log('Product image uploaded:', product.image);
        await fetch('http://localhost:4000/addProduct',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        })
      } else {
        console.error('Error uploading image:', response_data.message);
      }
    } catch (error) {
      console.error('Error during upload:', error);
    }
  };

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={handleInputChange}
          type="text"
          name='name'
          placeholder='Type here'
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Product Price</p>
          <input
            value={productDetails.old_price}
            onChange={handleInputChange}
            type="text"
            name='old_price'
            placeholder='Type here'
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={handleInputChange}
            type="text"
            name='new_price'
            placeholder='Type here'
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={handleInputChange}
          name="category"
          className='addproduct-selecter'
        >
          <option value="">Select Category</option>
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="Upload Thumbnail"
            className='addproduct-thumbnail-img'
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          id="file-input"
          name="image"
          hidden
        />
      </div>

      <button onClick={addProduct} className='addproduct-btn'>Add</button>
    </div>
  );
};

export default AddProduct;
