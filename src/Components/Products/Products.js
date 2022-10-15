import React from "react";
import "./Products.css";
import { add } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";


function Product({ id, title, image, price, rating }) {

  const dispatch = useDispatch();
  const handleAdd = ({ id, title, image, price, rating }) => {
    dispatch(add({ id, title, image, price, rating }));
};
  return (
    
    <div className="product" >
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={()=> handleAdd({ id, title, image, price, rating })}>Add to Basket</button>
    </div>
  );
}

export default Product;