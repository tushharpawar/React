
import { useEffect, useState } from 'react'

const Github = () => {
   
    const [gitData,setGitData]=useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/tushharpawar')
        .then(response=>response.json())
        .then(gitData=>{
            setGitData(gitData)
        })
      },[])
      
  return (
    <div className='text-center bg-gray-600 m-4 text-white text-3xl'> Github followers : {gitData.followers}
    <img src={gitData.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default Github