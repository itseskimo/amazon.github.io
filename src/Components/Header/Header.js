import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useSelector } from 'react-redux';



function Header() {
    const items = useSelector((state) => state.cart.cartItems);
  return (
    <div className="header">
        <Link to='/'>
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
        </Link>
        <div className="header_search">
        <select className='select'>
                <option>All</option>
                <option>Camera</option>
                <option>Clothes</option>
            </select>
            <input className="header_searchInput" type="text"/>
            {/* SEARCH LOGO */}
            <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
            <Link to='/login'>
            <div className="header_option">
                <span className="header_optionLineOne">Hello Guest</span>
                <span className="header_optionLineTwo">Sign In</span>
            </div>
            </Link>
            <div className="header_option">
                <span className="header_optionLineOn">Returns</span>
                <span className="header_optionLineTw">& Orders</span>
            </div>
            <div className="header_option">
                <span className="header_optionLineOn">Your</span>
                <span className="header_optionLineTw">Prime</span>
            </div>
            <Link to='/checkout'>
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo header_basketCount">{items.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header