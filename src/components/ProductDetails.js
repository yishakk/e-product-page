import React, { useState } from 'react'
import plusIcon from '../assets/ecommerce-product-page-main/images/icon-plus.svg'
import minusIcon from '../assets/ecommerce-product-page-main/images/icon-minus.svg'
import { productData } from './ProductShowcase'
import CartIcon from './CartIcon'

const ProductDetails = ({ updateCount }) => {
    const [counter, setCounter] = useState(0)

    return (
        <div className="product-details">
            <h4>{productData.company}</h4>
            <h1>{productData.productName}</h1>
            <p>{productData.description}</p>

            <section className='prices'>
            <div className="current-price">
                {/* <h2>${productData.price.toFixed(2)}</h2> */}
                <span id="currentPrice" >{productData.currentPrice}</span>
                <span id="discount" >{productData.discount}</span>
            </div>
            <div className="oldprice">
            <span id="oldPrice" >{productData.originalPrice}</span>
            </div>
            </section>
            <div className="action-bar">
                <div className="counter">
                    <button onClick={()=>setCounter(counter - 1)}>
                        <img src= {minusIcon} alt="" />
                    </button>
                    <span>{counter}</span>
                    <button onClick={()=>setCounter(counter + 1)}>
                        <img src= {plusIcon} alt="" />
                    </button>
                </div>
                <button id="add" className="cart-btn" onClick={() => updateCount(counter)}>
                    <CartIcon color="white" />
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    )
}

export default ProductDetails
