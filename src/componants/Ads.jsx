import React, { useEffect, useState } from 'react'
import Hot from '../assets/Hot.png'
import Bag_3  from '../assets/Bag_3.png'
import Pot from '../assets/Pot.png'
import Bag_2 from '../assets/Bag_2.png'
import Container from './Container'
import Text from './Text'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './Product'
import axios from 'axios';

export const Ads = () => {
      
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
 let data = await axios.get("https://fake-coffee-api.vercel.app/api");
 setAll(data.data)
}
all()

  },[]) 
  return (
    <>
<div className="py-[10px]">
<Container>
<Text tag={'h3'} text ={'New Arrivals'} className={'font-DM font-bold text-[39px]  pb-[40px]'} />

<Slider {...settings}>
{all.map(item=>
<Product imgsrce={item.image_url} text={item.name} texttwo={"$"+item.price} badgetxt={item.id+"%"} twotext={item.region}/>
)}
</Slider>


</Container>
</div>
    </>
  )
}
