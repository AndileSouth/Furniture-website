import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';



export const Product = (props) => {

    const { id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
   
    const cartItemAmount = cartItems[id]
  return (
    <div className='Product col'>
        <div className="img-container">
           <img src={productImage} alt="" />
        </div>
        <div className="product-description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <button onClick={() => {addToCart(id)}}>
              Add to Cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
        </div>
    </div>
  )
}
