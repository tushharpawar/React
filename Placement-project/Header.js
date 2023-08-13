import React from 'react'
import './logo.jpg'
import NightlightIcon from '@mui/icons-material/Nightlight';
import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {
  return (
    <nav className='w-full md:w-[85vw] md:h-[11vh] mt-3 md:ml-16'>
        <div className='flex justify-around items-center'>
            <div className='w-auto h-10 md:pt-0'><img className='w-auto h-[35px] md:h-[60px] ml-4' src="logo.jpg" alt="logo"/></div>
            <div className='font-semibold md:font-bold item-center text-center text-sm md:text-xl'><h1>Placement Management</h1></div>
            <div className='flex flex-row md:w-30'>
            <div className='h-5 md:h-18 w-auto'><div className='pr-3 md:pr-10'><NightlightIcon/></div></div>
            <div className='h-5  flex flex-row md:h-18 w-auto'><div><MenuIcon/></div></div>
            </div>
        </div>
    </nav>

    
  )
}
