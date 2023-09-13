import {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

export const Login = () => {
    
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")


    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <>
        <h2 className='text-3xl font-bold p-4'>Login</h2>
        <input type="text"
        className='m-2 text-2xl border-2 border-black'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
         placeholder='Username' />

        <input type="text"
        className='m-2 text-2xl border-2 border-black'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         placeholder='Password' />
        <button className='bg-gray-400 m-4 p-2' onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login