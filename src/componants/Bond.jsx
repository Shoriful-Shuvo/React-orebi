import React from 'react'
import Images from './Images'
import Bonde from '../assets/Bond.png' 
import Container from './Container'
const Bond = () => {
  return (
    <>
    <Container>
          
    <div className='py-[20px]'> 
        <Images imgsrc={Bonde} className={'bg-cover w-full bg-center bg-norepeat'}/>
    </div>
    
    </Container>
    </>
  )
}

export default Bond