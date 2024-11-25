import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import axios from 'axios';




function Items({ currentItems }) {

  return (
    <>
    <div className="flex flex-wrap">
     {currentItems &&
     currentItems.map((item) => (          
          <div className="w-[283px]">
          <Product imgsrce={item.category.image} text={item.title} badgetxt={item.id+"%"} texttwo={"$"+item.price} twotext={item.category.name}/>
          </div>
  ))}
  </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {
  let [all,setAll]=useState([])
useEffect(()=>{
async function all() {
let data = await axios.get("https://api.escuelajs.co/api/v1/products");


setAll(data.data)

}
all()
},[]) 
  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = all.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(all.length / itemsPerPage);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % all.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>

<Items currentItems={currentItems} />
<div className="flex justify-between my-[50px] ">
      <ReactPaginate
        breakLabel=". . ."
        
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        
        renderOnZeroPageCount={null}
        containerClassName= 'flex gap-x-3 '
        activeLinkClassName =' bg-[#262626] text-white'
        pageLinkClassName = 'drop-shadow-2xl outline outline-1 outline-gray-200 outline-offset-1 py-[5px] px-[12px]'
        previousLabel =''
        nextLabel =''
      />
      <h2 className='pt-[8px]' >Products from {itemOffset+1} to {endOffset<all.length?
       endOffset:all.length} of {all.length}</h2>
       </div>
    </>
  );
}
export default Pagination