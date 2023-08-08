import React,{useState,createContext} from 'react';
import './App.css'; 
import Header from './Header';
// import Home from './Home';
// import Contact from './contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import About from './About';
// import Error from './Error';
// import Insta from './Insta';
// import Email from './Email';
// import UserDetails from './UserDetails';
import ComA from './ComA';
import ComB from './ComB';
import ComC from './ComC';

const AppState=createContext();

const App = () => {

  const [data,setdata]=useState("Tushar");


     return (
       <>
       <AppState.Provider value={data}>
       <Header/>
         <ComA data={data}/>
       </AppState.Provider>   
       </>
     ) 
}

export default App;
export {AppState};