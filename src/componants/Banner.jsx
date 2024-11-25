import React from 'react'
import Images from './Images'
import banner from "../assets/banner.png"
const Banner = () => {
  return (
    <>
    <div >
      <Images imgsrc={banner} className={"bg-cover w-full bg-center bg-norepeat"} />
    </div>
    </>

  )
}

export default Banner