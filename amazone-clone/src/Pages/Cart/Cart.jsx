import React, { useContext } from 'react'
import classes from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/Dataprovider'
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown } from "react-icons/io"; 
import { IoIosArrowDropup } from "react-icons/io";

function Cart() {
  const [{basket,user}, dispatch]=useContext(DataContext); 
  const total = basket.reduce ((amount,item)=>{
    return item.price + item.amount + amount 
  },0)

  const increment =(item)=>
    dispatch [{
      type:Type.ADD_TO_BASKET, 
      id 
    }]
  return (
    <LayOut>
      <section className= {classes.container}>
        <div className= {classes.cart__container}>
          <h2>Your Shopping basket</h2>
          <hr/>
          {
            basket?.length==0?(<p> Opps! No items in your cart </p>):(
              basket?.map((item,i)=>(
               <section className= {classes.cart_product}>
   <ProductCard
               key={i}
                 product={item}
                 readerDesc={true}
                 renderAdd={false}
                 flex={true} 
              />
                <div className= {classes.btn_product}>
                  <button className={classes.btn} onClick={()=>increment(item)}>
<IoIosArrowDropup size ={20}/> 
                  </button>

                  <span> {item.amount} </span>
                  <button className={classes.btn} onClick={()=>decrement(item.id)}> 
<IoIosArrowDown size ={20}/> 
                  </button>
                </div>
              </section>
      
              ))
       )
          }
        
        </div>
      {basket?.length !== 0&& (
        <div className= {classes.subtotal}>
           <div>
              <p> Subtotal ({basket?.length})items </p>
              <CurrencyFormat amount= {total}/>
           </div>
           <span> 
           <input type = 'checkbox'/>
           <small> This order contains a gift </small>
           </span>
           <Link to = '/payments'>continue to checkout </Link>
        </div>
      )}   
      </section>
    </LayOut>
  )
}

export default Cart
