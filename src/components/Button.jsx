import React from 'react'
import { Link } from "react-router-dom";
const Button = ({btnName,img,head,show}) => {
  return (
    <>
        <button onClick={show}>
            <Link state={{img,head}}>{btnName}</Link>
        </button>
    </>
  )
}

export default Button