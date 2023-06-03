import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextUtils from './component/TextUtils';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 const[mode,setMode]=useState('light')

 const toggleMode=()=>{
  if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#9ec5fe';
  document.title='textutils -Dark mode';}
  else{
  setMode('light');
  document.body.style.backgroundColor='white';
  document.title='textutils -Light mode';
}
 }
  return (
    <>
    {/* <Navbar title='TextUtils' about='About Us' contact='Contact' mode={mode} toggleMode={toggleMode}/> */}
   {/* <Router> 
   <Routes>
          <Route path="/about" element={<About/>} >
          </Route>
          <Route path="/" >
          <TextUtils heading='Enter your Feedback' mode={mode}/>
          </Route>
        </Routes>
    </Router> */}
  
   {/* <TextUtils heading='Enter your Feedback' mode={mode}/>
   <About/> */}

<Router>
<Navbar title='TextUtils' about='About Us' contact='Contact' mode={mode} toggleMode={toggleMode}/>
     
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About about='About Us'/>} />
          <Route path="/" element={<TextUtils heading='Enter the text to analyze below' mode={mode}/>} />
        </Routes>
      </div>
   </Router>
   </>
  );
}

export default App;
