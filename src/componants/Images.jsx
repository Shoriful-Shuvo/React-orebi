import React from 'react'

const Images = ({imgsrc, imgalt,className}) => {
  return (
    <img src={imgsrc} alt={imgalt} className={`${className}`} />
  )
}

export default Images