import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import ADVERT from './CheckoutAD.png';



function Checkout() {


    
    const [{ basket, user }, dispatch] = useStateValue();



    return (
        <div className="checkout">
            <div className="left">
                <img className ="Checkout_advert" src={ADVERT}/>
                <div>
                    <h3>Hello, {!user ? 'Guest' : user.email}</h3>
                <h2 className="Checkout_title">Your Shopping Basket</h2>

                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}


            </div>
            </div>
           
            <div className="right">
                <Subtotal/>

            </div>

        </div>
    )
}

export default Checkout
