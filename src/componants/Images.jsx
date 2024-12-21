import React from 'react'

const Images = ({imgsrc,fallbackSrc, imgalt,className}) => {
  return (
    <img src={imgsrc} alt={imgalt}
    onError={(e) => {
      e.target.src = fallbackSrc;
    }}
    className={`${className}`} />
  )
}

export default Images