import React from 'react'
import Navbar from '../Navbar'
import Category from '../Category'
import Banner from '../Banner'
import Promo from '../Promo'
import Products from '../Products'
import { Ads } from '../Ads'
import Bond from '../Bond'
import Offers from '../Offers'
import Footer from '../Footer'


const Home = () => {
  return (
    <>

    <Banner/>
    <Promo/>
    <Products/>
    <Ads/>
    <Bond/>
    <Offers/>

    </>
  )
}

export default Home