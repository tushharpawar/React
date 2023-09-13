import {useContext} from 'react'
import UserContext from '../Context/UserContext'


const Profile = () => {
    const {user}=useContext(UserContext)

    if(!user) return <div className='text-4xl m-4 text-bold text-red-700'>Pls Login!!!!!</div>

  return (
    <div className='text-4xl m-4 text-bold text-green-700'>Welcome {user.username} :)</div>
  )
}

export default Profile