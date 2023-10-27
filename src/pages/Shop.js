import React from 'react'
import { Product } from '../components/Product';
import { PRODUCTS } from '../components/Products';
import "./Shop.css";

export const SHOP = () => {
  return (
    <div className='Shop'>
        <h2>Shop</h2>
        <div className='Shop-content row'>

        <div className='settings col settings1'>
            Filter
        </div>

        <div className="product-container">
           {
            PRODUCTS.map((product) => (
                <Product data={product}/>
            ))
           }
        </div>

        </div>
        
    </div>
  )
}
