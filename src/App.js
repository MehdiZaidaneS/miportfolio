import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
// import AboutMe from './Components/AboutMe/AboutMe';
// import ContactMe from './Components/ContactMe/ContactMe';
import Projects from './Components/Projects/Projects';
import FrontPage from "./Components/FrontPage/FrontPage";
 import logo from "./media/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from 'react';


function App() {

const [sidebar, setSidebar] = useState(false)


const change = () =>{
  if(sidebar === true){
    setSidebar(false)
  }else{
    setSidebar(true)
  }
}

const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleWindowResize);
  
  if(windowWidth > 777){
    setSidebar(false)
  }
  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
  
}, [windowWidth]);


  return (

    
    <div className='AppBase'>
    <Router basename='/miportfolio'>
    <div className="App" >
    
        <div className='logo'>
            <Link to="/"><img src={logo} alt="" width={60}></img></Link> 
        </div>
        <div className='Bar'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            {/* <Link to="/contact">Contact</Link> */}
            {/* <Link to="/aboutme">About Me</Link> */}
        </div>
        <div className='socialmedia'>
            <a href="https://github.com/MehdiZaidaneS" 
               className="youtube social" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faGithub} size="2x" />
             </a>
             <a href="https://www.linkedin.com/in/mehdi-snickeri/"
               className="facebook social" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faLinkedin} size="2x" />
             </a>
        </div>
        <div className='bars' >
            <button onClick={change}>
               <FontAwesomeIcon icon={faBars} size="2x"/>
             </button>
        </div>
      </div>

      { sidebar &&
      <div className='sidebar'>
          <div className='Bar2'>
            <Link to="/" onClick={change}>Home</Link>
            <Link to="/projects" onClick={change}>Projects</Link>
            {/* <Link to="/contact" onClick={change}>Contact</Link> */}
          </div>
          <div className='socialmedia2'>
            <a href="https://github.com/MehdiZaidaneS" 
               className="youtube social" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faGithub} size="2x" />
             </a>
             <a href="https://www.linkedin.com/in/mehdi-snickeri/"
               className="facebook social" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faLinkedin} size="2x" />
             </a>
          </div>
          <p>Find me:</p>
          <div className='footer2'> 
          
             <a href="https://www.youtube.com/@freecodecamp" 
                className="youtube social" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.facebook.com/mehdi.zaidane.56/"
                className="facebook social" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com/reactjs" className="twitter social" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com/mehdi_zdn5/"
                className="instagram social" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div> 
      </div>
      }

      { sidebar === false &&
      <Routes>
            <Route exact path='/' element={<FrontPage/>} />
            <Route exact path='/projects' element={<Projects/>} />
            {/* <Route exact path='/aboutme' element={<AboutMe/>} /> */}
            {/* <Route exact path='/contact' element={<ContactMe/>} />  */}
      </Routes>
     }

      <div className="footer">
         <a href="https://www.youtube.com/@freecodecamp" 
           className="youtube social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faYoutube} size="2x" />
         </a>
         <a href="https://www.facebook.com/mehdi.zaidane.56/"
           className="facebook social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faFacebook} size="2x" />
         </a>
         <a href="https://twitter.com/reactjs" className="twitter social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faTwitter} size="2x" />
         </a>
         <a href="https://www.instagram.com/mehdi_zdn5/"
           className="instagram social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faInstagram} size="2x" />
         </a>
      </div>
       

    </Router>  
    </div>

  );
}

export default App;
