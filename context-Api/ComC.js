import React,{useContext} from 'react'
import { AppState } from './App'

const ComC = () => {
    const appData=useContext(AppState)
  return (
   <>
     <div>ComC</div>
     <h1>{appData}</h1>
   </>
  )
}

export default ComC