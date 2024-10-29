// import React from 'react'
// import {BrowserRouter as Router,Routes,Route} from  "react-router-dom"
// import Landing from './Pages/Landing/Landing'
// import SignIn from './Pages/Auth/Signup'
// import Payment from './Pages/Payment/Payment'
// import Orders from './Pages/Orders/Orders'
// import Cart from './Pages/Cart/Cart'
// import Results from './Pages/Results/Results'
// import ProductDetail from './Pages/ProductDetail/ProductDetail'
// import { useParams } from 'react-router-dom'
// import {loadStripe} from '@stripe/stripe-js';
// import { PaymentElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';

// const stripePromise = loadStripe (
//   'pk_test_51QAfOlG81apglS69WIiqUPbvSHtckOdvXijvdyYHQ8reYLbbxEYwtaxgAyNBmC8mg7eqte7Ree4xve5LyOdqKKRe00mLYb6HOU'
// )
// function Routing () { 
//   return (
//       <Router>
//         <Routes>
//             <Route path="/" element = {<Landing/>}/>
//             <Route path="/auth" element ={<SignIn/>}/>
//             <Elements stripe={stripePromise}>
//               <Payment/>
//             </Elements>
//             <Route path="/payments" element ={<Payment/>}/>
//             <Route path="/orders" element ={<Orders/>}/>
//             <Route path ='./category/:categoryName' element = {<results/>}/>
//             <Route path = './products/:productId' element = {<ProductDetail/>}/> 
//             <Route path="/cart" element ={<Cart/>}/>
//         </Routes>
//       </Router>
//   )
// }

// export default Routing


import React from 'react'
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import { useParams } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';
import { PaymentElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"




const stripePromise = loadStripe('pk_test_51QAfOlG81apglS69WIiqUPbvSHtckOdvXijvdyYHQ8reYLbbxEYwtaxgAyNBmC8mg7eqte7Ree4xve5LyOdqKKRe00mLYb6HOU');
function Routing() { 
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route 
        path="/payments" 
        element={
          <ProtectedRoute message={"You must LogIn to Pay"} redirect={"/payments"}>
              <Elements stripe={stripePromise}> {/* Stripe context for payment processing */}
                <Payment />
              </Elements>
            </ProtectedRoute>
        } 
      />
      <Route path="/orders" element={
        <ProtectedRoute message={"You must LogIn to access your Orders"} redirect={"/orders"}>
              <Orders />
            </ProtectedRoute>}
             />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Routing;