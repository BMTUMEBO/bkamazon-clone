import react from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel' 
import {img} from "./data"
import Classes from './Carousel.module.css'




function CarouselEffect (){
    return (
        <div>
    <Carousel
      autoPlay = {true}
      infiniteLoop = {true}
      showIndicators = {false}
      showThumbs={false}
    >
    {
        img.map ((imageItLink,i)=>{
            return <img src = {imageItLink} key={i}/>


        })
    }
    </Carousel> 
    <div className={Classes.hero__img}> </div> 
        </div>
    )
}

export default CarouselEffect 
