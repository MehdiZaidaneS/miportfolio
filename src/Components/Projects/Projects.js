import React, { useState } from 'react'
import Project from './Project/Project'
import "./Projects.css"

import santa from "./media/santasnow.jpg"
import web from "./media/web.png"
import wolfgame from "./media/wolfgame.jpg"
import java from "./media/java.png"
import techweb from "./media/techweb.jpg"
import logreg from "./media/UserLogAndReg.jpg"
import dodgeball from "./media/dodgeball.png"
import ChatApp from "./media/ChatApp.png"
import GymApp from "./media/gymapp.png"
import portofolio from "./media/portofolio.png"



const Projects = () => {


 

  const [languageShow, setLanguageShow] = useState("");
  const [abrir, setAbrir] = useState(false)
  const [showProject, setShowProject] = useState({})


  const projects = [
    {
      title: "Old Portfolio",
      description: "My first portfolio created with React Typescript.",
      año: 2022,
      language: "TypeScript",
      url: portofolio,
      id: 9,
      link: "https://github.com/MehdiZaidaneS/portfolio"
    },
    {
      title: "SantaSnow",
      description: "SantaSnow is game built with Unity/C# in 2022. The game has 2 game modes and 3 different enemies. The goal of the game is to kill the final boss without losing the initial 5 lives.",
      año: 2022,
      language: "C#",
      url: santa,
      id: 8,
      link: "https://github.com/MehdiZaidaneS/SantaSnowScripts.git"
    },
    {
      title: "Tech Web",
      description: "This is a technology web page, not yet completed, created in 2021 with HTML and CSS.",
      año: 2021,
      language: "HTML & CSS",
      url:techweb,
      id: 7,
      link: "https://github.com/MehdiZaidaneS"
    },
    {
      title: "The Wolf Adventure",
      description: "The Adventures of the Wolf it is a game created in group with Unity/C# in 2021.The game consists of overcoming 3 levels fighting with other animals and collecting mushrooms to gain special effects.",
      año: 2021,
      language: "C#",
      url: wolfgame,
      id: 6,
      link: "https://github.com/varia-ict/varia-agile-20C-ryhma-1.git"
    },
    {
      title: "Dodge the Ball",
      description: "Dodge the Ball was my first game built with Unity/C#. It was made in 2021.The game consists of dodging balls as their speed and spawn rate increase.",
      año: 2021,
      language: "C#",
      url: dodgeball,
      id: 5,
      link: "https://github.com/MehdiZaidaneS/DodgeBallGameScripts.git"
    },
    {
      title: "Supervivientes",
      description: "Supervivientes was my first web page created with HTML and CSS. It was made in 2021. It is a fan page about the most popular programs in Spain.",
      año: 2021,
      language: "HTML & CSS",
      url: web,
      id: 4,
      link: "https://github.com/MehdiZaidaneS/SupervivientesWeb.git"
    },
    {
      title: "RPG Game",
      description: "RPG Game was my first programming project, created with Java in 2021. The game consists of overcoming tasks and challenges and completing an incredible story.",
      año: 2021,
      language: "Java",
      url: java,
      id:3,
      link: "https://github.com/MehdiZaidaneS/RPG-Java.git"
    },
    {
      title: "Log In & Register",
      description: "Functional Login and Registration Form made with React and Firebase.",
      año: 2022,
      language: "React",
      url: logreg,
      id:2,
      link: "https://github.com/MehdiZaidaneS/UserLogAndRegister.git"
    },
    {
      title: "Chat App",
      description: "Functional Chat App made with React and Firebase.",
      año: 2023,
      language: "React",
      url: ChatApp,
      id:1,
      link: "https://github.com/MehdiZaidaneS/ChatApp"
    },
    {
      title: "Gym App",
      description: "Application made with react that facilitates your progress in the gym. Count the kilos that you will have to use in each set and the necessary rest.",
      año: 2023,
      language: "React",
      url: GymApp,
      id:0,
      link: "https://github.com/MehdiZaidaneS/gymapp"
    }
  ]


  const projectToShow = 
  languageShow === "" ?
  projects.filter(project => project.id > -1)
  :
  projects.filter(project => project.language === languageShow)


  return (
    <div className='Projects'>
      <h1>Latest Works</h1>
      <div className='buttons'>
         <button onClick={() => setLanguageShow("")}>All</button>
         <button onClick={() =>setLanguageShow("React")}>React</button>
         <button onClick={() =>setLanguageShow("TypeScript")}>TypeScript</button>
         <button onClick={() =>setLanguageShow("C#")}>C#</button>
         <button onClick={() =>setLanguageShow("Java")}>Java</button>
         <button onClick={() =>setLanguageShow("HTML & CSS")}>HTML & CSS</button>
      </div>
      {
        abrir &&
        <p>{showProject.title}</p>
      }
      <div className='projectsDisplayed'>
      {
        projectToShow.map(project => {
          return(
            <button onClick={()=> {setAbrir(false); setShowProject(project)}}> <Project pic={project.url} title={project.title}></Project></button>
          )
        })
      }
      </div>
      
    </div>
  )
}

export default Projects
