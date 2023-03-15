import React from 'react'
import "./Project.css"

const Project= ({pic, title}) => {
  return (
    <div className='Project'>
      <img src={pic} width={300} height={180} alt=""></img>
      <span>{title}</span>
    </div>
  )
}

export default Project
