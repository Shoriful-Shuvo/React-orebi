import React from 'react'
import Text from './Text'
import Flex from './Flex'
import { ImCross } from 'react-icons/im'
import Images from './Images'
import Price from './Price'
import { FiMinus } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { cartslice, removeCart } from '../redux/slices/cartslice'

const Cart = () => {
  const cart2 = useSelector((state)=>state.cartslice.cartProduct)
  const cart = useSelector((state)=>state.cartslice.cartProduct)
  const cart3 =useSelector((state)=>state.cartslice.cartProduct)
  const dispatch =useDispatch()
  const handleRemove =(item)=>{
    dispatch(removeCart(item))
  }
 
  
  return (
    <>
<div className="py-[100px]">
<Text tag={'h3'} text={'Cart'} className='text-[49px] mb-[100px] text-black font-bold' />

    <div className="h-[89px] bg-[#F5F7F7]">
       <Flex className={"gap-x-[250px]"}>
       <Text tag={"p"} text={"Product"} className='text-[#1E1E1E] text-[14px] pl-[30px] font-semibold pt-[33px] ' />
       <Text tag={"p"} text={"Price"} className='text-[#1E1E1E] text-[14px] font-semibold pt-[33px] ' />
       <Text tag={"p"} text={"Quantity"} className='text-[#1E1E1E] text-[14px] font-semibold pt-[33px] ' />
       <Text tag={"p"} text={"Total"} className='text-[#1E1E1E] text-[14px] font-semibold pt-[33px] ' />
       </Flex>
    </div>




{
  cart.map((item,index)=>(
    <div className="h-[120px] border-2 group">
    <Flex  >
    <ImCross onClick={()=>handleRemove(item)} className='group-hover:block hidden ml-[5px] cursor-pointer
     text-[10px] mt-[55px]' />
    <div className="h-[120px] mx-[5px]  w-[115px]">
    <Images imgsrc={item.image_url} fallbackSrc={item.images} imgalt={'sorry'}    />
    </div>
    <Text tag={"h4"} text={item.name}  className='ml-[20px] w-[90px] text-[12px] font-semibold py-[25px]   ' />
    <Price teg={"p"} className="ml-[100px] w-[50px] mt-[45px] text-[16px] font-semibold" texttwo={"$" +item.price} />
    <Flex className={'border-2 h-[30px] mt-[45px] ml-[225px]'}>
    <div className="h-[30px] w-[30px]  ">
    <GoPlus onClick={()=>handleincrease(item)} className='m-[5px]' />
     </div>
    
    <Text tag={'p'} text={item.qtn} className='h-[30px] w-[30px] text-center  ' />
    <div className="h-[30px] w-[30px]  ">
    <FiMinus className='m-[5px]' />

   
    </div>
    
    </Flex>
    <Text tag={'h4'} className=" ml-[220px] mt-[45px] text-[16px] font-semibold" text={"$"+item.price*item.qtn} />
    </Flex>
    </div>

  ))
}


{/* ++++++++++++++++ */}


    <div className="border-b-2 h-[70px] mt-[20px] w-[100%] ml-[20px]">    
<Flex>

<div className='pb-[50px]' >
<select className='h-[45px] w-[200px] pl-[15px] bg-white border-[1px] border-gray-200 '>
    <option disabled selected ><Text tag={'p'} text={'SIZE'}/></option>
    <option ><Text tag={'p'} text={'Small (S)'} /></option>
    <option ><Text tag={'p'} text={'Medium (M)'} /></option>
    <option ><Text tag={'p'} text={'Large (L)'} /></option>
    <option ><Text tag={'p'} text={'Extra Large (XL)'} /></option>
  </select>  
</div>    
<Text tag={'p'} text={'Apply coupon'} className={'ml-[20px] mt-[10px] text-[16px] font-semibold'} />
<Text tag={'p'} text={'Update cart'} className='ml-[700px] mt-[10px] text-[16px] font-semibold' />
</Flex>
    
</div>
   <Text tag={'p'} className='text-end pr-[10px] mb-[20px] pt-[40px] text-[16px] font-semibold'  text={'Cart totals'} />

    
        <table className='border ml-[730px] mb-[40px]  border-slate-300'>
        <tr className='border-2'>
            <th>
                <Text tag={'h4'} text={'Subtotal'} className='  font-bold ml-[10px] pr-[150px] py-2 border-r-2' /> 
                </th>
            <td>
            <Text tag={'p'} text={"389.99 $"} className=' ml-[10px]   pr-[150px] py-2 ' /> 
            </td>
        </tr>
        <tr> 
            <th>
            <Text tag={'h4'} text={'Total'} className='font-bold 
            pr-[150px]  font-bold  py-2 border-r-2' />
            </th>
            <td>
            <Text tag={'p'} text={'389.99 $'} className=' ml-[10px]  pr-[150px] py-2 ' />
            </td>
        </tr>
       </table>

   <Button btntxt={'Proceed to Checkout'} className={'py-[10px] px-[20px] ml-[1000px]'} />

</div>
    </>
  )
}

export default Cart