import React from 'react'
import "./ShowProject.css"

const ShowProject = ({title,description,ano,language,url,link}) => {
  return (
    <div className='showProject'>
      <h2>{title}</h2>
      <div className='projectInfo'>
        <div className='uno'>
          <img src={url} width={350} height={200} alt=""></img>
        </div>
        <div className='dos'>
          <h3>Project brief:</h3>
          <p>{description}</p>
        </div>
        <div className='tres'>
          <h3>Project Info:</h3>
          <p>Date - {ano}</p>
          <p>Language - {language}</p>
          <p>Repository - <a id='link' target="_blank" rel="noreferrer" href={link}>Github Link</a></p>
        </div>
      </div>
      
      
    </div>
  )
}

export default ShowProject
