import React from 'react'
import logo from '../assets/ecommerce-product-page-main/images/logo.svg'
import avatar from '../assets/ecommerce-product-page-main/images/image-avatar.png'
import './css/nav.css'
import CartIcon from './CartIcon'

const Navbar = ({ cartCount }) => {
    return (
        <nav>
        <div id="logo">
            <img src={logo} alt="" />
        </div>
        <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="profile-cart">
            <button id="cart">
                <div className="btnCart">
                <CartIcon />
                <div className="cart-count">{ cartCount }</div>
                </div>
            </button>
            <div id="profile">
                <figure>
                    <img src={avatar} alt="avatar "/>
                </figure>
            </div>
        </div>

        {/* <div className="cart">
            <div className="cart-header">Cart</div>
            <div className="msg-empty">Your cart is empty</div>
            <div className="checkout">Checkout</div>
                
        </div> */}

        </nav>
    )
}

export default Navbar
