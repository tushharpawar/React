import './App.css';
import React,{useState} from 'react';


function App() {
  const[num,setNum]=useState(1);
  function inc(){
    setNum(num+1);
  }
  function dec(){
    setNum(num-1);
  }

      return(
        <div className="App">
          
    
         <div className='main'>
         
          <h1 className='heading'>{num}</h1>
          <div className='buttom'>
          <button className='btn' onClick={inc}>increment</button>
          <button className='btn' onClick={dec}>decrement</button>
          </div>
         
         </div>
        </div>
      );
}
export default App;