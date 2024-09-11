import React from 'react';
import './items.css';
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='items'>
      <Link to={`/product/${props.id}`}> <img src={props.image} alt={props.name} /> </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price.toFixed(2)}
        </div>
        {props.old_price && (
          <div className="item-price-old">
              ${props.old_price.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
}

export default Items;
