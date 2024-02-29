import React, { useState } from 'react'
import Project from './Project/Project'
import ShowProject from './ShowProject/ShowProject'
import "./Projects.css"

import santa from "./media/santasnow.jpg"
import wolfgame from "./media/wolfgame.jpg"
import java from "./media/java.png"
import logreg from "./media/UserLogAndReg.jpg"
import dodgeball from "./media/dodgeball.png"
import tablecreator from "./media/TableCreatorr.jpg"
import ChatApp from "./media/ChatApp.png"
import GymApp from "./media/gymapp.png"
import todolist from "./media/todolist.png"
import portofolio from "./media/portofolio.png"
import expenseTracker from "./media/expenseTracker.png"
import SV2022 from "./media/SV2022.png"
import adivinador from "./media/Adivinador.png"
import banco from "./media/Banco.png"
import Portfolio2023 from "./media/Potfolio2023.png"
import zhoot from "./media/zhoot.png"



const Projects = () => {


 

  const [languageShow, setLanguageShow] = useState("");

  const [abrir, setAbrir] = useState(false)
  const [showProject, setShowProject] = useState({})


  const projects = [
    
    {
      title: "To Do List",
    description: "Made with React+ExpressJs+MongoDB. It allows you to create, edit and delete tasks that you need to do..",
    año: 2024,
    language: "NodeJS",
    url: todolist,
    id: 15,
    link: "https://github.com/MehdiZaidaneS/ToDoList"
    },
    {

      title: "Table Creator",
      description: "Full-Stack app made with ReactJs, ExpressJS, and MongoDB. The application allows you to create tables and add rows with data that is stored in the database. The tables will be organized by names. You can delete rows, delete tables, move tables to reorder the way they are displayed.",
      año: 2023,
      language: "NodeJS",
      url: tablecreator,
      id: 14,
      link: "https://github.com/MehdiZaidaneS/TableCreator"

    },
    {
      title: "New Portfolio",
      description: "My personal portfolio made with ReactJs. You can review all my projects and personal info.",
      año: 2023,
      language: "React",
      url: Portfolio2023,
      id: 13,
      link: "https://github.com/MehdiZaidaneS/miportfolio"
    },

    {
      title: "Expense Tracker",
      description: "Application created with ReactJs, NodeJs and MongoDB. The application saves our income and expenses in the database. It displays also all transactions in the main dashboard.",
      año: 2023,
      language: "NodeJS",
      url: expenseTracker,
      id: 12,
      link: "https://github.com/MehdiZaidaneS/ExpenseTracker"
    },
    
    
    
    {
      title: "SantaSnow",
      description: "SantaSnow is game built with Unity/C# in 2022. The game has 2 game modes and 3 different enemies. The goal of the game is to kill the final boss without losing the initial 5 lives.",
      año: 2022,
      language: "C#",
      url: santa,
      id: 11,
      link: "https://github.com/MehdiZaidaneS/SantaSnowScripts.git"
    },
    
    {
      title: "The Wolf Adventure",
      description: "The Adventures of the Wolf it is a game created in group with Unity/C# in 2021.The game consists of overcoming 3 levels fighting with other animals and collecting mushrooms to gain special effects.",
      año: 2021,
      language: "C#",
      url: wolfgame,
      id: 10,
      link: "https://github.com/varia-ict/varia-agile-20C-ryhma-1.git"
    },
    {
      title: "ZHOOT",
      description: "Making my personal social network with React Js.",
      año: 2023,
      language: "React",
      url: zhoot,
      id: 9,
      link: "https://github.com/MehdiZaidaneS/socialnetwork"
    },

    {
      title: "Old Portfolio",
      description: "My first portfolio created with Typescript/React.",
      año: 2022,
      language: "TypeScript",
      url: portofolio,
      id: 8,
      link: "https://github.com/MehdiZaidaneS/portfolio"
    },
    
    
    {
      title: "RPG Game",
      description: "RPG Game was my first programming project, created with Java in 2021. The game consists of overcoming tasks and challenges and completing an incredible story.",
      año: 2021,
      language: "Java",
      url: java,
      id:7,
      link: "https://github.com/MehdiZaidaneS/RPG-Java.git"
    },
    {
      title: "Log In & Register",
      description: "Functional Login and Registration Form made with React and Firebase.",
      año: 2022,
      language: "Firebase",
      url: logreg,
      id:6,
      link: "https://github.com/MehdiZaidaneS/UserLogAndRegister.git"
    },
    {
      title: "Chat App",
      description: "Functional Chat App made with React and Firebase.",
      año: 2023,
      language: "Firebase",
      url: ChatApp,
      id:5,
      link: "https://github.com/MehdiZaidaneS/ChatApp"
    },
    {
      title: "Gym App",
      description: "Application made with react that facilitates your progress in the gym. Count the kilos that you will have to use in each set and the necessary rest.",
      año: 2023,
      language: "React",
      url: GymApp,
      id:4,
      link: "https://github.com/MehdiZaidaneS/gymapp"
    },
    {
      title: "Dodge the Ball",
      description: "Dodge the Ball was my first game built with Unity/C#. It was made in 2021.The game consists of dodging balls as their speed and spawn rate increase.",
      año: 2021,
      language: "C#",
      url: dodgeball,
      id: 3,
      link: "https://github.com/MehdiZaidaneS/DodgeBallGameScripts.git"
    },
    
    {
      title: "Supervivientes 2022",
      description: "TV reality web site project made with ReactJS.",
      año: 2022,
      language: "React",
      url: SV2022,
      id: 2,
      link: "https://github.com/MehdiZaidaneS/SV2022"
    },
    {
      title: "Banc",
      description: "One of my first projects using Java. Basic banc system. You can create account, deposit, and withdraw. In spanish.",
      año: 2021,
      language: "Java",
      url: banco,
      id: 1,
      link: "https://github.com/MehdiZaidaneS/Banco"
    },
    {
      title: "I guess your mind",
      description: "One of my first projects made with Java. Guess what you're thinking. Spanish language.",
      año: 2021,
      language: "Java",
      url: adivinador,
      id: 0,
      link: "https://github.com/MehdiZaidaneS/AdivinadorJava"
    }
  ]


  const projectToShow = 
  languageShow === "" ?
  projects.filter(project => project.id > -1)
  :
  projects.filter(project => project.language === languageShow)


  const nextButton = () =>{
    let nextIndex = 0;
    const currentIndex = projectToShow.findIndex(x => showProject.id === x.id);
    nextIndex = currentIndex === projectToShow.length - 1 ?  0  : currentIndex + 1;
    setShowProject(projectToShow[nextIndex])
  }

  const previousButton = () =>{
    let previousIndex = 0;
    const currentIndex = projectToShow.findIndex(x => showProject.id === x.id);
    previousIndex = currentIndex === 0 ? projectToShow.length - 1 : currentIndex - 1;
    setShowProject(projectToShow[previousIndex])
  }


  return (
    <div className='intento'>
       <div className='Projects'>
         <h1>Latest Works</h1> 
         <div className='buttons'>
            <button onClick={() => setLanguageShow("")}>All</button>
            <button onClick={() =>setLanguageShow("NodeJS")}>React/NodeJS</button>
            <button onClick={() =>setLanguageShow("Firebase")}>React/Firebase</button>
            <button onClick={() =>setLanguageShow("React")}>React</button>
            <button onClick={() =>setLanguageShow("TypeScript")}>TypeScript</button>
            <button onClick={() =>setLanguageShow("C#")}>C#</button>
            <button onClick={() =>setLanguageShow("Java")}>Java</button>
         </div>
    
         {
           abrir &&
           <div className='moreInfo'>
             <ShowProject title={showProject.title} description={showProject.description} ano={showProject.año} language={showProject.language} url={showProject.url} link={showProject.link}/>
             <button onClick={()=> previousButton()}>Previous</button>
             <button onClick={()=> setAbrir(false)}>Close</button>
             <button onClick={()=> nextButton()}>Next</button>
           </div>
         }
         <div className='projectsDisplayed'>
         {
           projectToShow.map(project => {
             return(
               <button onClick={()=> {setAbrir(true); setShowProject(project)}}> <Project pic={project.url} title={project.title}></Project></button>
             )
           })
         }
         </div>
         
       </div>
  </div>
  )
}

export default Projects
