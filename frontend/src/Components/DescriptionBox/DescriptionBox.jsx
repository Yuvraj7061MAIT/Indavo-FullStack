import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews(142)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Discover the perfect blend of style and functionality with our
          Product. Crafted with high-quality materials, this product type offers
          durability and comfort for everyday use. Its sleek design and
          versatile features make it an ideal choice for mention specific use or
          occasions, e.g., casual wear, office, travel. Available in multiple
          sizes/colors to suit your unique preferences. Elevate your experience
          with the Product Name — because you deserve the best!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          unde earum iusto perspiciatis magni aperiam soluta quis libero,
          blanditiis deleniti reiciendis dolor facere necessitatibus impedit!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
