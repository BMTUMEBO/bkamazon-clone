import React from "react";
import logo from '../../../src/assets/images/amazon_PNG11.png'
import classes from '../Header/Header.module.css'
import {Link} from 'react-router-dom'
import {FaSearch} from "react-icons/fa"
import {BiCart} from "react-icons/bi"
import {SlLocationPin} from "react-icons/sl"
import flag from "../../assets/images/US Flag.jpeg"
import LowerHeader from "./LowerHeader"
import { useContext } from "react";
import { DataContext } from "../DataProvider/Dataprovider";
import { auth } from "../../Utility/firebase";
const Header = () => {


    const[{basket,user}, dispatch]=useContext(DataContext)
    const totalItem = basket?.reduce((amount, item)=>{
        return item.amount + amount
    },0)
    console.log (basket)
    return (

    <section className={classes.fixed}>
        <div className= {classes.header__container}> 
                <div className= { classes.logo__container}>
                    <Link to = "/"> 
                        <img src= "https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                        alt= "Amazon Logo"/>
                    </Link> 
                </div>
            <div className= {classes.delivery}>
                {/* // logo section */}
                {/*Delivery*/}
                <span>
                    {/* icon */}
                    <SlLocationPin/> 
                </span>
                <div>
                    <p>Delivered to</p>
                    <span> Reston to Bereket</span>
                </div>    

            </div>
                     
            <div className= {classes.search}>
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text"/>
                <FaSearch size ={38}/>
            </div>
            {/* right side link */}

            <div className= {classes.order__container}>
                
                <Link to =" /" className= {classes.language}>
                    <img src= "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/F"  alt=""/>
                    <select name ="" id="">
                    <option value=""> EN </option>
                    </select>
                </Link>  
            {/* three components*/}
            
            {/* orders */}

            <Link to ="/orders">
                <p>Returns</p>
                <span>& Orders</span>
            </Link>
              {/* Sign In link */}
          <Link to={!user && "/Auth"} className={classes.sign}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p> Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
            {/* cart */}
            <Link to ="/cart" className= {classes.cart}>
               <BiCart size ={35}/>
                <span> {basket.length} </span>
            </Link>
           </div>
        </div>
                    
<LowerHeader/>
    </section>
             
    );
}

export default Header;
