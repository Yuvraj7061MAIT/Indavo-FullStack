import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Items from '../Components/Items/Items';
import dropdown_icon from '../assets/Assets/Frontend_Assets/dropdown_icon.png';
import './css/ShopCategory.css';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Filter products by category
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className='shop-category'>
      {props.banner && (
        <img src={props.banner}  className='banner-image' />
      )}
      <div className="shopcatrgory-indexSort">
        <p>
          <span>
            Showing 1-{filteredProducts.length}
          </span> out of {all_product.length} products
        </p>
        <div className="shopcatogery-sort">
          Sort by <img src={dropdown_icon} alt="Sort" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Items 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price}  
            old_price={item.old_price} 
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
