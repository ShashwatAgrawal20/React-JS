import React from 'react'
import './Style/Product.css'
// Giving the Product the aurgumet to take 
function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                {/* Making of a Arrow Function for the counting of the star and showing them */}
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>★</p>
                    ))}
                </div>
            </div>

            <img src={image} alt=""></img>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
