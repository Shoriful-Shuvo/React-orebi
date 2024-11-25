import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Images from './Images'
import Ad_1 from'../assets/Ad_1.png'
import Ad_2 from'../assets/Ad_2.png'
import Ad_3 from'../assets/Ad_3.png'

const Promo = () => {
  return (
    <>
        <div className='py-[100px]'>
        <Container>
             <Flex className={'justify-between'}>
                <div className="w-[49%]">
                <Images imgsrc={Ad_1}/>
                </div>
                <div className="w-[49%] ">
                    <Images imgsrc={Ad_2}/>
                    <div className="mt-[30px] ">
                    <Images imgsrc={Ad_3} />
                    </div>
                </div>
             </Flex>
        </Container>
    </div>


    </>
  )
}

export default Promo