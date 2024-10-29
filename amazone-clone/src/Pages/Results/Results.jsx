import React, { useEffect } from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios' 
import { productUrl } from '../../API/endpoints'
import ProductCard from '../../Components/Product/ProductCard'

function Results() {
  const [results, setResults] = useParams ([]);
  const {categoryName}=useParams ()
  useEffect (()=> {
    axios.get ('${productUrl}/products/category/${categoryName}')
    .then((res)=> {
      setResults (res.data)
    }).catch ((err)=>{

  }) 

  })
  return (  
    <LayOut>
      <section>
      <h1 Style = {{padding: '30px'}}> Results  </h1>
      <p style={{padding: '30px'}}> Category / {categoryName} </p>
      <hr/>
        <div className={classes.product_container}>
          {results?.map((product)=>(
            <ProductCard
              key={product.id}
              product = {product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}

        </div>

      </section>
    </LayOut>
    
  )
}

export default Results
