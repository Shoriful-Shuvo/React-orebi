import React from 'react'

const Badges = ({test,className}) => {
  return (
    <div className={`bg-black text-white font-[DM] font-bold w-[67px] py-[5px]  text-[14px]   text-center  ${className}`}>{test}
    </div>
  )
}

export default Badges