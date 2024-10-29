import React, {useContext, useEffect, useState}from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from "./Order.module.css"
import { db } from '../../Utility/firebase'
import { DataContext } from '../../Components/DataProvider/Dataprovider'
import ProductCard from '../../Components/Product/ProductCard'

function Orders() {
  const [{user}, dispatch] = useContext(DataContext); 
  // console.log(user.uid)
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    if(user) {
db.collection("users").doc(user.uid).collection("orders").orderBy("created","desc").onSnapshot((snapshot)=>{
  setOrders(
    snapshot.docs.map((doc)=>({
      id:doc.id,
      data:doc.data()
    }))
  )
})

    }else {
      setOrders([])

    }

  },[]);
// console.log(orders)
  return (
    <LayOut>

      <section className= {classes.container}>
        <div className = {classes.orders__container}>
        <h2> Your Orders </h2>
        {orders?.length == 0 && <div> You do not have order yet. </div>}
        {/*ordered items*/}
        <div>
          {orders?.map((eachOrder)=>{
            return (
              <div> 
                <hr />
                <p> Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order)=>(
                    <ProductCard
                    flex={true}
                    product ={order}
                    key={order.id}/>
                ))}
              </div>
            );
          })}
          </div>  
        </div>
      </section>
    </LayOut>
  );
}

export default Orders
