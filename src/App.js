import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
// import AboutMe from './Components/AboutMe/AboutMe';
import ContactMe from './Components/ContactMe/ContactMe';
import Projects from './Components/Projects/Projects';
import FrontPage from "./Components/FrontPage/FrontPage";
 import logo from "./media/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


function App() {
  return (
    
    <Router basename='/miportfolio'>
      <div className="App" >
        <div className='logo'>
        <Link to="/"><img src={logo} alt="" width={60}></img></Link> 
          
        </div>
        <div className='Bar'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/aboutme">About Me</Link> */}
        </div>
        <div className='socialmedia'>
         <a href="https://www.youtube.com/c/jamesqquick" 
           className="youtube social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faYoutube} size="2x" />
         </a>
         <a href="https://www.facebook.com/learnbuildteach/"
           className="facebook social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faFacebook} size="2x" />
         </a>
         <a href="https://www.twitter.com/jamesqquick" className="twitter social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faTwitter} size="2x" />
         </a>
         <a href="https://www.instagram.com/learnbuildteach"
           className="instagram social" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faInstagram} size="2x" />
         </a>
        </div>
        </div>
      <Routes>
            <Route exact path='/' element={<FrontPage/>} />
            <Route exact path='/projects' element={<Projects/>} />
            {/* <Route exact path='/aboutme' element={<AboutMe/>} /> */}
            <Route exact path='/contact' element={<ContactMe/>} />
            
      </Routes>

    </Router>
  
  );
}

export default App;
