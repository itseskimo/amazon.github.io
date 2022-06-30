import React from "react";
import './Subtotal.css'
import { useSelector} from "react-redux";


const Subtotal = () => {
  const items = useSelector((state) => state.cart.cartItems);

  

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-header">
          <img
            src="https://m.media-amazon.com/images/I/41WSwvBZADL.jpg"
            alt=""
          />
          <h5>Your order is eligible for FREE Delivery.</h5>
          <p>
            Select this option at checkout. <a href="/">Details</a>
          </p>
        </div>
        <div className="subtotal">
          <h3>Subtotal ({items.length}):</h3>
          <div Name="price-container">
            <span>₹</span>
            <span className="item-price">18,</span>
            <span>00</span>
          </div>
        </div>

        <div className="contains-gift">
          <input
            type="checkbox"
            id="contains-gift"
            name="contains-gift"
            value="false"
          />
          <label for="contains-gift">This order contains a gift</label>
        </div>

        <button className="proceed-buy">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default Subtotal;
