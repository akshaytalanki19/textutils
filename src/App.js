import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import toast from 'react-hot-toast';
import {
   BrowserRouter as Router,
   Route,
   Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] =useState('light');
  const toggleMode = () =>{
   if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor= 'white';
      toast('Hello Light!',
         {
           duration: 1000,
           icon: '👏'
         }
         
       );
      document.title="Textutils - Light mode"
   }
   else{
      setMode('dark');
      document.body.style.backgroundColor= '#2a456e';
      toast('Hello Darkness!',
         {
           duration: 1000,
           icon: '👏',
           style: {
             borderRadius: '10px',
             background: '#333',
             color: '#fff',
           },
         }
         
       );
       document.title="Textutils - Dark mode"
   }
  }
  return (
     <> 
        <Router> 
        <Navbar title="Textutils" mode={mode}  toggleMode={toggleMode}/>
        {/* <Alert alert="This is alert"/> */}
        <div className="container my-3">
         <Routes>
         <Route path="/about" element={<About />} />
         <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
         </Routes>
        
        {/* <About/> */}
        </div>
        </Router>  
     </>
  );
}

export default App;
