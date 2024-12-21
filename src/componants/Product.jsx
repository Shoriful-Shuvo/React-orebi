import Text from './Text'
import Images from './Images';
import Badges from './Badges';
import Flex from './Flex';
import Price from './Price';
import { FaHeart} from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/slices/cartslice';


const Product = ({item,imgsrce,imgalte,text,texttwo,twotext,badgetxt}) =>{
  const dispatch = useDispatch();
  const handleAddtoCart = ()=>{
    dispatch(addCart({...item,qtn:1}));    
  
  }
  return (
    <>
    {/* {all.map(item=> */}

    <div className="w-[90%]  group">
     <div className="relative">
     <Link to= {"/shop"}>
      <Images imgsrc={imgsrce} imgalt={imgalte}  />
      </Link>
      <Badges test={badgetxt} className={'absolute  top-5 left-5'} />
      <div className=" group-hover:block hidden absolute bg-white w-full right-0 pr-[20px] py-[20px] bottom-[0px]">
      <Flex className={'align-middle gap-x-5 justify-end'}>   
      <Text tag={'p'} text={'Add to Wish List'} className='font-light hover:font-bold text-[15px]' />
      <FaHeart className='mt-[6px] text-[15px]' />
       </Flex>
      <Flex className={'align-middle justify-end gap-x-5'} >
      <Text tag={'p'} text={'Compare'} className='font-light hover:font-bold text-[15px]' /> 
      <IoIosGitCompare className='mt-[6px] text-[15px]' /> 
      </Flex>
<div onClick={handleAddtoCart} className="cursor-pointer">

<Flex  className={'align-middle  justify-end gap-x-5'} >
      <Text
       
      tag={'h5'} 
      text={'Add to Cart'}
      className='font-light  hover:font-bold text-[15px]' />
      <FaShoppingCart className='mt-[6px] text-[15px]' />  
      </Flex>
</div>
          </div>
     </div>
    
     

      <Flex className='justify-between' >
        <Text tag={'h4'} className='text-[14px]' text={text}/>
        <Price teg={'p'} texttwo={texttwo} className='font-regualr text-[#767676]' />
      </Flex>
      <Price teg={'p'} twotext={twotext} className='font-regualr text-[#767676]' />

    </div>
    
    
    {/* )} */}


    </>
  )
}

export default Product
