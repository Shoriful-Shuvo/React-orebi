import React from 'react'

const Button = ({btntxt,className}) => {
  return (
    <button className={`bg-[#262626] text-white ${className}`}> {btntxt} </button>
  )
}

export default Button