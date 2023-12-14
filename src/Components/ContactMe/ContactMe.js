import React, { useRef, useState } from 'react'
import "./ContactMe.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import emailjs from "emailjs-com"




const ContactMe = () => {


  const [card, setCard] = useState(0)
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_m8qri4q', 'template_s0o3oed', form.current, 'QPj-IwKz1Ed2NheEk')
      .then((result) => {
          console.log(result.text);
          
          
      }, (error) => {
          console.log(error.text);
      });

      alert("The email has been sent to Mehdi successfully!")
      form.current.reset();
      
      
  };



  const cards = [
    {
      id: 0,
      name: "Email",
      icon: faMailBulk,
      text: "mehdicontacto@gmail.com"
    },
    {
      id: 1,
      name: "Location",
      icon: faHome,
      text: "Helsinki, Finland"
    },
    {
      id: 2,
      name: "Phone",
      icon: faPhone,
      text: "+345 123 456 789"
    }

  ]

  return (
    <div className='Contactme'>
      <h1>Contact</h1>
      <h2>GET IN TOUCH</h2>

      <div className='contactForm'>
         <div className='info'>
          {
            cards.map(card =>{
              return(
              <div>
                <h2>{card.name}</h2>
                <FontAwesomeIcon icon={card.icon} size="1x" />
                <p>{card.text}</p>
              </div>
              )
            })
          }
         </div>
         

         
        <div className='info2'>
           <div>
               <h2>{cards[card].name}</h2>
               <FontAwesomeIcon icon={cards[card].icon} size="2x" />
               <p>{cards[card].text}</p>
            </div>
            <button onClick={()=>setCard(0)}>1</button>
            <button onClick={()=>setCard(1)}>2</button>  
            <button onClick={()=>setCard(2)}>3</button> 
        </div> 
          
         

             
        


         <div className='holahola'>
            <form className='form' id='myForm' ref={form} onSubmit={sendEmail}>
                 <div className='block1'>
                    <input placeholder='Name' type='text' name='user_name'/>
                    <input placeholder='Email' type='email' name='user_email'/>
                 </div>
                 <div className='block3'>
                    <textarea placeholder='Message' name='message' rows={7}></textarea>
                    <div className='papa'>
                      <button type='submit' id='hola' name='submit' >Send Message</button>
                    </div> 
                 </div>
            </form>
         </div>
         

      </div>
    </div>
  )
}

export default ContactMe
