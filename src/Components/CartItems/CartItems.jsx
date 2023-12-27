import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import {  useNavigate } from 'react-router-dom';
export default function CartItems() {
    const navigate = useNavigate();
    const {all_product,cartItems, removeFromCart,getTotalCartAmount} = useContext(ShopContext);
    const [code,setCode] = useState("");
    const handleChange = event =>{
        setCode(event.target.value);
    }
    const memem = () =>{        
        if(code==="Lund Lele"||code==="Lund"||code==="lund"||code==="lund lele"||code==="Lund lele"){
            return true;
        }else{

            return false;
        }
    }
    return (
        <div className='cartItems'>
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className="cartItems-format cartItems-format-main">
                    <img src={e.image} className='carticon-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price *cartItems[e.id]}</p>
                    <img className='cartItems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartItems-down">
            <div className="cartItems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartItems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <p>Shipping Fees</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartItems-promocode">
                <p>If you have promo code, Enter it here</p>
                <div className="cartItems-promobox">
                    <input type="text" placeholder='Promo Code' onChange={handleChange} />
                    
                    <button onClick={()=>{memem===true?navigate('/promo'):navigate('/promo2')}}>Submit</button>
                </div>
            </div>
        </div>
    </div>
    )
}
