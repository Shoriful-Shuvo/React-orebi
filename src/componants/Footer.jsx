import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Text from './Text'
import Images from './Images'
import Logo2 from "../assets/Logo2.png"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className='bg-[#F5F5F3] py-[50px]'>
        <Container>
            <Flex className={'content-between'}>
                <div className="w-[15%] pl-[10px]">

                 <Text tag={'h3'} className={'font-bold text-[12px] pb-[10px] font-DM'} text={'MENU'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px] text-[#6D6D6D] font-DM'} text={'Home'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px]  text-[#6D6D6D] font-DM'} Text={'Shop'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px]  text-[#6D6D6D] font-DM'} text={'About'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px] text-[#6D6D6D] font-DM'} text={'Contact'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px]  text-[#6D6D6D] font-DM'} text={'Journal'} />   
                </div>
                <div className="w-[15%] ">

                 <Text tag={'h3'} className={'font-bold text-[12px] pb-[10px] font-DM'} text={'SHOP'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px] text-[#6D6D6D] font-DM'} text={'Category 1'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px]  text-[#6D6D6D] font-DM'} text={'Category 2'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px]  text-[#6D6D6D] font-DM'} text={'Category 3'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px] text-[#6D6D6D] font-DM'} text={'Category 4'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px]  text-[#6D6D6D] font-DM'} text={'Category 5'} />   
                </div>
                <div className="w-[15%]">

                 <Text tag={'h3'} className={'font-bold text-[12px] pb-[10px] font-DM'} text={'HELP'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px] text-[#6D6D6D] font-DM'} text={'Privacy Policy'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px]  text-[#6D6D6D] font-DM'} text={'Terms & Conditions'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px]  text-[#6D6D6D] font-DM'} text={'Special E-shop'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px] text-[#6D6D6D] font-DM'} text={'Shipping'} />   
                 <Text tag={'p'} className={' text-[12px] pb-[3px]  text-[#6D6D6D] font-DM'} text={'Secure Payments'} />   
                </div>



                <div className="w-[25%] pl-[50px]">
                <Text tag={'h3'} className={'font-bold text-[12px] pb-[10px] font-DM'} text={'(052) 611-5711'} /> 
                <Text tag={'h3'} className={'font-bold text-[12px] pb-[10px] font-DM'} text={'company@domain.com'} /> 
                <Text tag={'p'} className={' text-[12px] pb-[3px] text-[#6D6D6D] font-DM'} text={'575 Crescent Ave. Quakertown, PA 18951'} /> 
                </div>
                <div className="w-[40%]">
                    <Images imgsrc={Logo2} className={' w-[45%] pl-[110px]'}/>

                </div>
            </Flex>
            <Flex className={'justify-between mt-[50px]'}>
                <div>
                    <Flex className={'items-center gap-x-3'}>
                    <FaFacebookF />
                    <FaLinkedinIn />                    
                    <FaInstagram />
                    </Flex>
                
                </div>
                <Text tag={'p'} text={'2020 Orebi Minimal eCommerce Figma Template by Adveits'} className={'text-[12px] pb-[3px] text-[#6D6D6D] font-DM'} />
            </Flex>
        </Container>
    </div>
    
    </>
  )
}

export default Footer