import React,{useState} from 'react';
import './App.css'; 

const App = () => {
const [myStyle,setMystyle]=useState({
  color:'black',
  backgroundColor:'white'
})

const [btnText,setBtnText]=useState("Enable Dark Mode");

const toggleStyle = ()=>{
  if(myStyle.color === 'white'){
    setMystyle({
      color:"white",
      backgroundColor:"black"
    })
    setBtnText("Enable Light Mode")
  }
  else{
    setMystyle({
      color:"black",
      backgroundColor:"white"
    })
    setBtnText("Enable Dark Mode")
  }

  }
  
  return (
    <div>
      <div className='a' style={myStyle}>
      <button className='btn' onClick={toggleStyle}>{btnText}</button>
    </div>
    </div>
  )
}

export default App;