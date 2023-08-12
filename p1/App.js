// import About from "./About";
import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";

const App = () => {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState('light');
  
  const showAlert=(message,type)=>{
              setAlert({
                msg:message,
                type:type
              })
              setTimeout(()=>{
                  setAlert(null);
              },1500)
  }

 const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#212325'
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
  
  <>
    <Navbar title="Blog" aboutText="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}></TextForm>
    {/* <About/> */}
    </div>
  </>
  );
};

export default App;