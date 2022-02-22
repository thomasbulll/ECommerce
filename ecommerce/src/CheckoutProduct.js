import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>
            <div className ="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkProduct_price">
                <small>£</small>
                <b>{price}</b>
                </p>
                <div className ="checkoutProduct_rating">
                {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
                </div>
                {!hideButton && (
                     <button id="BUTTON" onClick={removeFromBasket}>Remove From Basket</button>
                )}
               

            </div>
        </div>
    )
}

export default CheckoutProduct
