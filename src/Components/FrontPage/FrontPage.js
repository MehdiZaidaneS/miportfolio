import React, { useEffect, useState } from 'react'
import foto from "./foto.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Experience from './Experience/Experience'
import Progressbar from './Progress_bar';


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
    introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  }
]

const educationExperience = [
  {
    id: 0,
    year: "2020 - 2023",
    jobTitle: "Software Developer",
    company: "Vantaan Ammattiopisto Varia",
    introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    id: 1,
    year: "2017 - 2018",
    jobTitle: "Lukio",
    company: "IES Ben Gabirol",
    introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    id: 2,
    year: "2013 - 2017",
    jobTitle: "Peruskoulu",
    company: "IES Mercedes Labrador",
    introduction: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
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
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                   <button>Contact Me</button>
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
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
             <button>Download CV</button>
             <button>Contact Me</button>
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
