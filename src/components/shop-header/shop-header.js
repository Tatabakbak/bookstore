import React from 'react';
import './shop-header.css';
import {Link} from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
            <Link className="logo text-dark" to="/">BStore</Link>
            <Link className="shopping-cart" to="/cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </Link>
        </header>
    );
};

export default ShopHeader;
