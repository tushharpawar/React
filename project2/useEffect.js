import './App.css';
import Header from './Header'
import { useState,useEffect } from 'react';

function App(){
    const[state,setState]=useState(0);
    const[state2,setState2]=useState(0);
    
    useEffect(()=>{
      window.alert("UseEffect Called");
    },[state])
      
        return(
        <div className="App">
        <Header/>
        <button onClick={()=>setState(state+1)}>Click Me {state}</button>
        <button onClick={()=>setState2(state2+1)}>Click Me {state2}</button>
        </div>
      );
}
export default useEffect;