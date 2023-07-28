import './App.css';
import Header from './Header.js'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function App(){
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const [data,setData]=useState([]);

const addData=()=>{
  setData([...data,{name,email}])
  setName('')
  setEmail('')
};

const removeItem=(index)=>{
  let arr=data;
  arr.splice(index,1);
  setData([...arr]);
}

      return(
        <div className="App">
        <Header/>
        <div className='form'>
        <Stack direction="row" spacing={2}>
        <TextField value={name} onChange={(e)=>setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined"/>
        <TextField value={email} onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined"/>
        <Button onClick={addData} variant="contained" color="success">
        <AddIcon/>
        </Button>
        </Stack>
        <div className='data'>
          <div className='data_value'>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {
            data.map((element,index)=>{
                  return(
                  
  
    <div key={index} className='data_value'>
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Button onClick={()=>removeItem(index)} variant="contained" color="error">Remove</Button>
          </div>
        )
            })
          }
        </div>
        </div>
        </div>
      );
}
export default App;