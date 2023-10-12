import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import SignUp from './Signup.jsx'
import SignIn from './Signin.jsx'
import Profile from './Profile.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<SignIn/>,
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
