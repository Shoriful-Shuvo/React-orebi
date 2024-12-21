import React from 'react'

const Text = (props) => {
  return (
    <props.tag   onClick={props.onClick}  className={props.className} > {props.text}   </props.tag>
  )
}

export default Text