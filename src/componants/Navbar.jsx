import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Images from './Images'
import Logo from'../assets/Logo.png'
import Menu from './Menu'
import { Link } from 'react-router-dom'
<assets />

const Navbar = () => {
  return (
    <div className={`py-[20px]`} >
        <Container>
            <Flex>

               <div className="w-[10%] px-[5px] pt-[2px]">
                <Link to={"/"}>               
                <Images imgsrc={Logo} />
                </Link>               
                </div>
               <div className="w-[90%]">
                <ul className='flex gap-x-5 justify-center '>
                <Link to={'/'} >
                <Menu Menuname={'Home'} />
                </Link>
                <Link to={'/shop'} >
                <Menu Menuname={'Shop'} />
                </Link>
                <Link to={'/about'} >
                <Menu Menuname={'About'} />
                </Link>
                <Link to={'/contacts'} >
                <Menu Menuname={'Contacts'} /></Link>
                <Link to={'journal'} >  
                <Menu Menuname={'Journal'} />
                </Link>
                

                </ul>
               </div>
            </Flex>

        </Container>
    </div>
  )
}

export default Navbar