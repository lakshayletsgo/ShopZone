import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'
export default function RelatedProducts() {
  return (
    <div className='relatedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className='relatedProducts-item'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
            })}
        </div>
    </div>
  )
}
