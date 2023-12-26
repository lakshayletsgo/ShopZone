import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Items/Item.jsx' 
export default function NewCollections() {
  return (
    <div className='new-Collections'> 
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
        })}
      </div>
    </div>
  )
}
