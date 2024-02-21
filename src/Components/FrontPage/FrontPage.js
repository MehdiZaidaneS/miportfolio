import React, { useEffect, useState } from 'react'
import CV from "./FULLSTACK CV.pdf"
import foto from "./foto5.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Experience from './Experience/Experience'
import Progressbar from './Progress_bar';
import {
	Link
} from 'react-router-dom';


import "./FrontPage.css"


const FrontPage = () => {


 const [skills, setSkills] = useState(true);
 const [experience, setExperience] = useState(false);
 const [education, setEducation] = useState(false);
 const [color, setColor] = useState("transparent")
 const [color2, setColor2] = useState("transparent")
 const [color3, setColor3] = useState("transparent")

 useEffect(()=>{
  if(skills === true){
      setColor("gray")
  }else if(skills === false){
    setColor("transparent")

  }if(education === true){
    setColor3("gray")
  }else if(education === false){
    setColor3("transparent")

  }if(experience === true){
    setColor2("gray")
  }else if(experience === false){
    setColor2("transparent")
  }
}, [skills, education, experience])


const codingSkills = [
  {
    id: 0,
    name: "HTML & CSS",
    progress: 100,
    percentage: "100%"
  },
  {
    id: 1,
    name: "ReactJS",
    progress: 100,
    percentage: "100%"
  },
  {
    id: 2,
    name: "JavaScript",
    progress: 100,
    percentage: "100%"
  },
  {
    id: 3,
    name: "Typescript",
    progress: 85,
    percentage: "85%"
  },  
  {
    id: 4,
    name: "C#",
    progress: 85,
    percentage: "85%"
  },
  {
    id: 5,
    name: "Java",
    progress: 85,
    percentage: "85%"
  },
  {
    id: 6,
    name: "SQL",
    progress: 75,
    percentage: "75%"
  },
  {
    id: 7,
    name: "NoSQL",
    progress: 75,
    percentage: "75%"
  },
  {
    id: 8,
    name: "NodeJS",
    progress: 75,
    percentage: "75%"
  },
  {
    id: 9,
    name: "REST API",
    progress: 60,
    percentage: "60%"
  }
]

const workExperience = [
  {
    id: 0,
    year: "01.01.2023 - 01.07.2023",
    jobTitle: "Front-end Developer",
    company: "Coviran Supermercados",
    introduction: "I worked as a Junior Front-end developer remotely from Finland. Tasks: Develop responsive React components with dynamic content. Create styles and animations for components using CSS. Write tests for web components using React testing library"
  },
  {
    id: 1,
    year: "31.03.2022 - 11.11.2022",
    jobTitle: "Software Developer",
    company: "Crementum Oy",
    introduction: "I worked as a Software Developer for 6 months as an intern at Crementum. Tasks: Control, deploy, update and maintain the system. Store the data collected from the sensors in the DB and display them in Grafana."
  }
]

const educationExperience = [
  {
    id: 0,
    year: "2020 - 2023",
    jobTitle: "Software Developer",
    company: "Vantaan Ammattiopisto Varia",
    introduction: "I completed my Information and communication technology degree at Varia Vocational School. There I learnt the basics of ICT and I focused on the branch of Software Development as a profession."
  }
]


  return (
    <div>
      
      <div className='FrontPage'>
        <div className='parts'>
          <div className='part1'>
                <div className='text'>
                   <h2>Mehdi Zaidane</h2>
                   <h1>I'M A DEVELOPER</h1>
                   <p>Passionate Full-Stack developer capable of transforming ideas into incredible functional web pages.</p>
                   <button><Link to="/projects">My Projects</Link></button>
               </div>
               <div className='photo'>
                   <img src={foto} alt="" width={430}></img>
               </div>
          </div>
          <div className='part2'>
             <a href='#info' ><FontAwesomeIcon size='2x' icon={faChevronDown}></FontAwesomeIcon></a>
          </div>
        </div>
        
        
      </div>
      <div className='block2' id='info'>
         <h1>About Me</h1>
         <div className='aboutMe'>
           <img src={foto} alt="" width={400}></img>
           <div className='try'>
             <p>I'm a highly motivated and solution-oriented developer, eagerly seeking opportunities in the field of Full-Stack Development. 
             I have extensive knowledge in Front-end development, but I'm not limited to Full-Stack developer, i can also work with Node.JS + Relational/Non-relational DBs + REST.
             I stay up-to-date with the latest industry trends and continuously seek opportunities to enhance my skillset. My primary passion lies in front-end development.</p><br></br>
              <p>You can check all my work and personal projects in this portfolio. </p>
             <button><a href={CV} download>Download CV</a></button>
             
            </div>
         </div>
         <div className='myInfo'>
           <div className='buttons'>
             <button style={{backgroundColor: color}} onClick={()=> {setSkills(true); setEducation(false); setExperience(false)}}>Skills</button>
             <button style={{backgroundColor: color2}} onClick={()=> {setSkills(false); setEducation(false); setExperience(true)}}>Experience</button>
             <button style={{backgroundColor: color3}} onClick={()=> {setSkills(false); setEducation(true); setExperience(false)}}>Education</button>
           </div>
           {skills &&
            <div className='skills'>
               {
                codingSkills.map(skill => {
                  return(
                    <Progressbar bgcolor="gray" progress={skill.progress} name={skill.name} height={23} />
                  )
                })
               }
            </div>
           }
           { experience &&
            <div className='experiences'>
            {
             workExperience.map(experience => {
               return(
                <Experience jobtitle={experience.jobTitle} year={experience.year} company={experience.company} introduction={experience.introduction} />
               )
             })
            }
            </div>
           }
           { education &&
            <div className='educations'>
            {
             educationExperience.map(experience => {
               return(
                <Experience jobtitle={experience.jobTitle} year={experience.year} company={experience.company} introduction={experience.introduction} />
               )
             })
            }
            </div>
           }
          
          
         </div>
      </div>
     
    </div>
  )
}

export default FrontPage
