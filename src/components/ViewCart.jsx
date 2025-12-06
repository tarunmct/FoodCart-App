import React, { useEffect, useState, useContext }  from 'react'
import './ViewCart.css'
import { cartContext } from '../App';



const ViewCart = () => {

  const {cart,setCart} = useContext(cartContext);
  const[total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0));
  },[cart])

  const removeCart = (product)=> {
    setCart(cart.filter((c)=>c.id!==product.id));
  }

  

  return (
   <>
   <h1 className='cart-heading'>Cart Products</h1>
    <div className='cart-container'>
      {cart.map((product)=>(
        <div className="cart-product" key={product.id}>
        <div className="img">
          <img src={product.pic} alt="image" />
        </div>
        <div className="cart-product-details">
          <h3>{product.name}</h3>
          <p>Price Rs.{product.amt}</p>
        </div>
        <div className='remove-btn'>
          <button onClick={()=>removeCart(product)}>Remove</button>
        </div>
      </div>
      ))}
    
    </div>
    <h2 className='cart-amount'>Total Amount Rs.{total}</h2>
    </>
  )
}

export default ViewCart
