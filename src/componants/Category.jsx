import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Bars from '../assets/icons/Bars'
import Text from './Text'
import { FaSearch,FaUserAlt,FaCaretDown } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <>
    
    <div className="bg-[#F5F5F3] py-[20px]">
        <Container>
            <Flex className={`justify-between`}>
                <div className="w-[15%] pl-[10px] pt-[15px]">
                    <Flex className={`items-center`} >
                    <Bars/> 
                    <Text tag={'h3'}  text={"Shop by Category"} className={'text-[14px] font-[DM]  pl-[15px]'}/>
                    </Flex>
                </div>
                <div className="w-[60%] relative ">
                  <input type="text" placeholder='Search Products' className='bg-white    w-[95%] py-[15px] text-[14px] rounded-md pl-[10px] ml-[80px]' />
                  <FaSearch className='absolute right-[-25px] top-6 translate-y-[-30%]' />
                </div>
                <div className="w-[25%]  ">
                <Flex className='items-center relative'>
                <FaUserAlt className='absolute  top-[18px]  left-[150px] text-[14px] ' />
                <FaCaretDown className='absolute  top-[18px]  left-[165px]' />
               <Link to={"/cart"} >
               <IoCartSharp  className='absolute  top-[16px]  left-[200px] text-[18px] ' />
               
               </Link>

                </Flex>
                
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Category