import React, { useEffect, useState } from 'react'
import Badges from './Badges'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import Container from './Container'
import Text from './Text'

import Cap from '../assets/Cap.png'
import Chair from '../assets/Chair.png'
import Head from '../assets/Head.png'
import Glass from '../assets/Glass.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './Product';
import axios from 'axios';

const Offers = () => { 
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
     let data = await axios.get("https://www.freetestapi.com/api/v1/products");
     setAll(data.data)
   }
   all()
   
      },[]) 
    
return (
<>
<div className="py-[10px]">
<Container>
<Text tag={'h3'} text ={'Special Offers'} className={'font-DM font-bold text-[39px]  pb-[40px]'} />

<Slider {...settings}>
{all.map(item=>
<Product
item={item}
 imgsrce={item.image} text={item.name} badgetxt={item.id+"%"} texttwo={'$'+item.price} twotext={item.color}/>
)}
</Slider>

</Container>
</div>
</>


);
};

  




export default Offers