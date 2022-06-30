import React from 'react';
import "./CheckoutProduct.css";
import { useDispatch} from 'react-redux';
import { remove } from '../../Redux/cartSlice';

function CheckoutProduct({id, image, title, price, rating}) {
    
    const dispatch = useDispatch();

    const handleRemove = ({ id, title, image, price, rating }) => {
        dispatch(remove({ id, title, image, price, rating }));
    };

  return (
    
    
    <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt=''/>
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            
            <button onClick={()=> handleRemove({ id, title, image, price, rating })}>Remove From Basket</button>

        </div>
    </div>
  )
}

export default CheckoutProduct