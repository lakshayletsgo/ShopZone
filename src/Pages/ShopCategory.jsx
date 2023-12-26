import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';
export default function ShopCategory(props) {
  const {all_product} =useContext(ShopContext);   
  return (
    <div className='shop-category'>
        <img className='shopCategory-banner' src={props.banners} alt="" />
        <div className="shopCategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopCategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopCategory-products">
          {all_product.map((item,i)=>{
              if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
              }else{
                return null;
              }
          })}
        </div>
        <div className='shopcategory-loadmore'>
          Explore More 
        </div>
    </div>
  )
}
