import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/Assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../../assets/Assets/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const{addToCart} = useContext(ShopContext);
  return (
    <div className="ProductDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-imageList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="productDisplay-Right-prices">
          <div className="productDisplay-right-oldPrice">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-newPrice">
            ${product.new_price}
          </div>
          <div className="productDisplay-right-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            mollitia assumenda saepe consequatur quo non temporibus amet
            explicabo repellendus eos accusantium adipisci corrupti, voluptatem
            inventore eum repudiandae veritatis! Nisi, veritatis!
          </div>
          <div className="productDisplay-right-size">
            <h1>Size</h1>
            <div className="prodictdisplay-right-sizes">
                <div>s</div>
                <div>m</div>
                <div>l</div>
                <div>xl</div>
                <div>xxl</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className="productdisplay-right-category">shirt
            <span>Category :</span> Women, T-Shirt , Crop Top
          </p>
          <p className="productdisplay-right-category">shirt
            <span>Tags :</span> Modern , Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
