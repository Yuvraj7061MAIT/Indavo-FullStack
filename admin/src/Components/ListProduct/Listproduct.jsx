import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";

const Listproduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  // Fetch all products from the API
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Function to remove a product by its ID
  const removeProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:4000/removeProduct", {
        method: "POST", // Using POST as per your API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), // Sending the product ID in the body
      });

      const result = await response.json();

      if (result.success === 1) {
        // If the product is successfully removed, update the state
        console.log(`Product with ID ${id} deleted successfully`);
        setAllProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      } else {
        console.error("Failed to remove product", result.message);
      }
    } catch (error) {
      console.error("Error occurred while removing product:", error);
    }
  };

  return (
    <div className="List-product">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproduct">
        <hr />
        {/* Product List */}
        {allproducts.map((product) => (
          <div key={product.id} className="listproduct-formate-main listproduct-format">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img
              className="listproduct-remove"
              src={cross_icon}
              alt="Remove"
              onClick={() => removeProduct(product.id)} // Call removeProduct on click
            />
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default Listproduct;
