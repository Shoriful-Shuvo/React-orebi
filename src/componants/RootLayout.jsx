import React from 'react'
import Headerlayout from './Headerlayout'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
    <Headerlayout/>
    <Outlet/>
    <Footer/>
    </>
    )
}

export default RootLayout