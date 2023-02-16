import React from 'react'
import foto from "./foto.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


import "./FrontPage.css"


const FrontPage = () => {
  return (
    <div>
      
      <div className='FrontPage'>
        <div className='parts'>
          <div className='part1'>
                <div className='text'>
                 <h2>HELLO,</h2>
                 <h1>I Am Developer</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                 <button>Contact Me</button>
               </div>
               <div className='photo'>
                 <img src={foto} alt="" width={500}></img>
               </div>
          </div>
          <div className='part2'>
            
             <a href='#info' ><FontAwesomeIcon size='2x' icon={faChevronDown}></FontAwesomeIcon></a>
          </div>
        </div>
        
        
      </div>
      <div className='block2' id='info'>
        <div className='aboutme'>
            <h1>About Me</h1>
         </div>
         <div className='recentprojects'>
            <h1>Recent projects</h1>
         </div>
      </div>
     
    </div>
  )
}

export default FrontPage
