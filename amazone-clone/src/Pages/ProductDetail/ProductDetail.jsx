import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/endpoints'
import ProductCard from '../../Components/Product/ProductCard'
import LowerHeader from '../../Components/Header/LowerHeader'
function ProductDetail() {
  const [product, setProduct]= useState ({})
  const [isLoading, setIsLoading]=useState(second)
  const {ProductId} = useParams ()
  useEffect (()=> {
    axios.get('$(productUrl}/products/$ {ProductId}')
    .then ((res)=>{
      setProduct(res.data)
      setIsLoading(false)
    })
  }) 
  return (
    <LayOut>
      {isLoading? (<Loader/>):(<ProductCard
       product={product}
       flex= {true}
       renderDesc = {true}
       renderAdd={true}
      />)}
       
    </LayOut>
    
  )
}

export default ProductDetail
