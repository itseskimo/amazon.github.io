import React from "react";
import './Checkout.css'
import { useSelector,useDispatch} from 'react-redux';
import { remove } from "../../Redux/cartSlice";
// import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";


const Checkout=()=> {
    
    const products = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const handleRemove = (item) => {
        dispatch(remove(item));
    };
    
    return(
        <div className="checkout">
            <div className="checkout__left">
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/ScanAndPay/Organized/More/IndependenceDay2019/OnSitePromotion/Updated/More_Page_Banner_1500x300.jpg' alt="" className="checkout__ad"/>
                <div>
                    {/*<h3>Hello{user?.email}</h3>*/}
                 <h2 className="checkout__title">Your Shopping Basket</h2>          

        
                  { products.map((item) => (
                    <div className="checkoutProduct" key={item.id}>
                    <img className="checkoutProduct_image" src={item.image} alt=''/>
                    <div className="checkoutProduct_info">
                        <p className="checkoutProduct_title">{item.title}</p>
                        <p className="checkoutProduct_price">
                            <small>$</small>
                            <strong>{item.price}</strong>
                        </p>
                        <div className="checkoutProduct_rating">
                            {Array(item.rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                        </div>
                        
                        <button onClick={()=> handleRemove(item.id)}>Remove From Basket</button>
            
                    </div>
                </div>


                ))}         
               
                  {/* { products.map((item) => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        
                    />  
                ))}         
                */}
            
                </div>
            </div>

            <div className="checkout__right">
                 <Subtotal/>
            </div>


        </div>
    )
};
export default Checkout;
