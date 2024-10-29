import React from 'react'
import classes from './Category.module.css'
import { Link } from 'react-router-dom' 

function CategoryCard({data}) {
  
  return (
    <div className= {classes.category}>
      <Link to ={'/catagory/${data.name}'}>
      <span>
        <h2>{data.title} </h2>
      </span>
      <img src={data.imageLink} alt="" />
      <p>Shop now</p>
      </Link> 
    </div>
  )
}

export default CategoryCard
