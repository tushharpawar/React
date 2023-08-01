import React,{useState,useEffect} from 'react';
import './App.css'; 
import Header from './Header';
import Home from './Home';
import Contact from './contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './About';
import Error from './Error';

const App = () => {
     return (
      <Router>
        <div>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
            
          <Route path='/About' element={<About/>}/>
            
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
            
        </Routes>
        </div>
      </Router>
     ) 
}

export default App;