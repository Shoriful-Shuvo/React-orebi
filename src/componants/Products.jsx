import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cat from "../assets/Cat.png";
import Clck from "../assets/Clck.png";
import Clock from "../assets/Clock.png"
import Bag from "../assets/Bag.png"
import Text from './Text'
import Container from './Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const Products = () => {

  //  +++++++++++++
 const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      };

let [all,setAll]=useState([])
useEffect(()=>{
async function all() {
let data = await axios.get("https://api.escuelajs.co/api/v1/products");
setAll(data.data)
}
all()
},[]) 
    
return (

<>

<div className="">
<Container>
<Text tag={'h3'} text ={'New Arrivals'} className={'font-DM font-bold text-[39px]  pb-[40px]'} />

<Slider {...settings}>
{all.map(item=>
<Product item={item} imgsrce={item.category.image} text={item.title} badgetxt={item.id+"%"} texttwo={"$"+item.price} twotext={item.category.name}/>


)}

</Slider>
</Container>
</div>


</>
)
}


export default Products