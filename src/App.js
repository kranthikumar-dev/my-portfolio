
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Routes for different sections */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<HeroSection />} /> {/* Fallback route */}
        </Routes>
        
        {/* Footer Component */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Kranthi Kumar. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://github.com/kranthikumar-dev" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/kranthi-kumar-2633a9341" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/kranthi.devx/profilecard/?igsh=MTFic3MzeGRpdXlwYQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import './App.css'; // To apply global styles
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar Component */}
//         <Navbar />
        
//         {/* Routes for different sections */}
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
        
//         {/* Footer Component */}
//         <footer className="footer">
//           <p>&copy; {new Date().getFullYear()} Kranthi Kumar. All Rights Reserved.</p>
//           <div className="social-links">
//             <a href="https://github.com/kranthikumar-dev" target="_blank" rel="noopener noreferrer">
//               <FaGithub size={30} />
//             </a>
//             <a href="https://www.linkedin.com/in/kranthikumar-dev" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin size={30} />
//             </a>
//             <a href="https://twitter.com/kranthikumar" target="_blank" rel="noopener noreferrer">
//               <FaTwitter size={30} />
//             </a>
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;
