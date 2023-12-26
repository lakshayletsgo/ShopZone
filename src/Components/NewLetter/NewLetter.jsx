import React from 'react'
import './NewLetter.css'
export default function NewLetter() {
  return (
    <div className='newLetter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newLetter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email ID' />
        <button>Subscribe</button>
        
      </div>
    </div>
  )
}
