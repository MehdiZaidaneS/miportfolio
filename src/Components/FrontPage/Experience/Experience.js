import React from 'react'
import "./Experience.css"



const Experience = ({year,jobtitle,company, introduction}) => {
  return (
    <div className='experience'>
      <h1>{jobtitle}</h1>
      <h3>{year}</h3>
      <h2>{company}</h2>
      <p>{introduction}</p>
    </div>
  )
}

export default Experience
