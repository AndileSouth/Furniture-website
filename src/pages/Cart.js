import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { PRODUCTS } from "../components/Products";
import { CartItem } from "./cart-item";
import './Cart.css'
import { Link } from 'react-router-dom';


export const CART = () => {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='Cart'>

      <div><h1>Your Cart Items</h1></div>

      <div className="cartItems col">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product}/>;
          }
        })}
      </div>
        <div className="end">

          <p>Subtotal: <b>${totalAmount}</b></p>

        <div className="checkout row">
          <div className="continue">
            <Link to='../shop' >
              Continue Shopping
            </Link> </div>
          <div className="checkout-btn">Checkout</div>
        </div>

        </div>
      

    </div>
  )
}
