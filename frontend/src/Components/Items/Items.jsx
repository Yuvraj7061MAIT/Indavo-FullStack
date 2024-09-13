import React from 'react';
import './items.css';
import { Link } from 'react-router-dom';

const Items = ({ id, image, name, new_price, old_price }) => { // Destructure props directly
  return (
    <div className='items'>
      <Link to={`/product/${id}`}> {/* Ensure the correct ID is passed */}
        <img  onClick={window.scrollTo(0,0)} src={image} alt={name || 'Product Image'} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${typeof new_price === 'number' ? new_price.toFixed(2) : new_price}
        </div>
        {old_price && (
          <div className="item-price-old">
            ${typeof old_price === 'number' ? old_price.toFixed(2) : old_price}
          </div>
        )}
      </div>
    </div>
  );
}

export default Items;
