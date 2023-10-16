import React, { useEffect, useState } from 'react'
import CV from "./CV PROGRAMMING.pdf"
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
    name: "HTML",
    progress: 100,
    percentage: "100%"
  },
  {
    id: 1,
    name: "CSS",
    progress: 90,
    percentage: "90%"
  },
  {
    id: 2,
    name: "React",
    progress: 85,
    percentage: "80%"
  },
  {
    id: 3,
    name: "JavaScript",
    progress: 85,
    percentage: "85%"
  },
  {
    id: 4,
    name: "Typescript",
    progress: 85,
    percentage: "85%"
  },  
  {
    id: 5,
    name: "C#",
    progress: 70,
    percentage: "70%"
  },
  {
    id: 6,
    name: "Java",
    progress: 70,
    percentage: "70%"
  },
  {
    id: 7,
    name: "SQL",
    progress: 55,
    percentage: "55%"
  },
  

]

const workExperience = [
  {
    id: 0,
    year: "31.03.2022 - 11.11.2022",
    jobTitle: "Software Developer",
    company: "Crementum Oy",
    introduction: "My role at Crementum was to control, update and maintain the functioning of the whole system. The goal was to store and display the recorded sensor data in the database as in Grafana. The programming language was Java and the database was InfluxDB. I also used tools like Azure DevOps, Azure Portal, PuTTY or Grafana."
  }
]

const educationExperience = [
  {
    id: 0,
    year: "2020 - 2023",
    jobTitle: "Software Developer",
    company: "Vantaan Ammattiopisto Varia",
    introduction: "I completed my Information and communication technology degree at Varia Vocational School. There I learnt the basics of ICT and I focused on the branch of Software Development as a profession."
  },
  {
    id: 1,
    year: "2017 - 2018",
    jobTitle: "Lukio",
    company: "IES Ben Gabirol",
    introduction: "I completed the scientific baccalaureate in Malaga, Spain."
  },
  {
    id: 2,
    year: "2007 - 2017",
    jobTitle: "Peruskoulu",
    company: "IES Mercedes Labrador",
    introduction: "I completed my compulsory secondary education in Malaga, Spain."
  },
  
]


  return (
    <div>
      
      <div className='FrontPage'>
        <div className='parts'>
          <div className='part1'>
                <div className='text'>
                   <h2>Mehdi Zaidane</h2>
                   <h1>I'M A DEVELOPER</h1>
                   <p>Passionate Front-End developer capable of transforming ideas into incredible functional web pages.</p>
                   <button><Link to="/contact">Contact Me</Link></button>
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
             <p>I'm Mehdi Zaidane and I just finished my programming degree at Varia Vocational School. I am very motivated to learn and gain work experience. I'm specialized in Front-end but I'm working hard to become a Full-Stack delevoper one day. <br></br>ReactJS, HTML, CSS, Typescript, Java and C# are my strengths. I also have some SQL experience.  I have 5 months of work experience as a programmer and I have also done many personal projects which you can see on GitHub.</p><br></br>
              <p>You can check all my work and personal projects in this portfolio. </p>
             <button><a href={CV} download>Download CV</a></button>
             <button><Link to="/contact">Contact Me</Link></button>
             
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
