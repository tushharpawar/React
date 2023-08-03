import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Error = () => {
  const navigate=useNavigate();
  return (
    <>
      <div>404 Page not Found</div>
      <Link><button onClick={()=>navigate(-1)}>Go back</button></Link>
    </>
    
  )
}

export default Error