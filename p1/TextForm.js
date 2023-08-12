import React,{useState} from 'react';

export default function TextForm(props) {
    const[text,setText]= useState("");
    // setText("Abcd");

    const handleUpClick=()=>{
        // console.log("HEllo");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLowClick=()=>{
        // console.log("HEllo");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleClearClick=()=>{
        // console.log("HEllo");
        let newText="";
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        
    }

  return (
   <>
     <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
       <div className="mb-3">
         <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#212325':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
       </div>
       <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
       <button className='btn btn-primary' onClick={handleLowClick}>Convert to Uppercase</button>
       <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something"}</p>
    </div>
   </>
  )
}