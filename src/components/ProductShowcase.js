import React, { useState } from 'react'
import productOne from '../assets/ecommerce-product-page-main/images/image-product-1.jpg'
import productThumbOne from '../assets/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg'
import productTwo from '../assets/ecommerce-product-page-main/images/image-product-2.jpg'
import productThumbTwo from '../assets/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg'
import productThree from '../assets/ecommerce-product-page-main/images/image-product-3.jpg'
import productThumbThree from '../assets/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg'
import productFour from '../assets/ecommerce-product-page-main/images/image-product-4.jpg'
import productThumbFour from '../assets/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg'

export const productData = {
    company: 'Sneaker Company',
    productName: 'Fall Limiited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
    currentPrice: '$125.00',
    discount: '50%',
    originalPrice: '$250.00',
    images: [productOne, productTwo, productThree, productFour],
    thumbnails: [productThumbOne,productThumbTwo, productThumbThree, productThumbFour]
}

const ProductShowcase = () => {
    const [imageIndex, setImageIndex] = useState(0)
    
    return (
        <div className="product-showcase">
            <figure>
                <img src={productData.images[imageIndex]} alt="" />
            </figure>
            <div className="thumbnails">
                {
                    productData.thumbnails.map((thumb, index) => {
                    return (
                        <div className="thumb" key={index} onClick ={()=>setImageIndex(index)}>
                            <img id="thumb" src={thumb} alt="" />
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default ProductShowcase
