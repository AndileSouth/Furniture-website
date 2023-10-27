import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


export const CartItem = (props) => {

  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  const { id, productName, price, productImage} = props.data;
  console.log(props);
  return (
    <div className='cartItem row'>
        <div className="img-container">
          <img src={productImage} alt="" />
        </div>
        <div className="description">
          <p><b>{productName}</b></p>
          <p>${price}</p>

          <div className="countHandler">
            <button onClick={() => {removeFromCart(id)}}>-</button>

            <input type="text" name="" id="" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>

            <button onClick={() => {addToCart(id)}}>+</button>
          </div>

        </div>
    </div>
  )
}
