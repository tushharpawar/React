import React from 'react'
import TextField from '@mui/material/TextField';
import MultipleSelectCompany from './SelectCompany';
import Options from './RadioBtn';
import Choices from './Choises';
import Technologies from './Technologies';
import Button from '@mui/material/Button';

export default function InnerFoem() {
  return (
    <>
          <div className='h-[85vh] w-[85vw] ml-[-10vw] mt-[-5vw] md:h-[auto] md:w-[73vw] md:ml-[0vw] md:mt-[0vh] shadow-2xl rounded-5xl'>
                <div className='font-bold text-base text-center md:text-2xl pt-2 '><h1 className='pt-1 md:pt-5'>Placement Application Form</h1></div>
                <div className='pt-3 ml-5 md:pt-8 md:ml-20 md:flex md:flex-row md:justify-evenly md:w-[50vw]'>
                    <div className='text-sm md:text-xl'>
                        <span><strong>Name : </strong>Tushar Chetanbhai Pawar</span>
                    </div> 
                    <div className='text-sm md:ml-0 md:text-xl '>
                        <span className=' md:pt-0'><strong>Time Left : </strong><span className='text-red-600'>2 days 3 hours 57 minutes 09 seconds</span></span>
                    </div>
                </div>

                <div className='sm:flex md:flex md:flex-row'>
                <div className='mt-3 ml-5 md:m-24 md:pt-6 w-auto flex md:flex-row'><div className='pt-2'><h2 className='font-semibold text-base md:font-bold md:text-xl'>Enrollment No. : </h2></div>  <div className='pl-2 md:pl-3 text-base w-44 md:w-48'><TextField
                    id="outlined-read-only-input"
                    defaultValue="202202626010032"
                    InputProps={{
                        readOnly: true,
                    }}
                    /></div>
                </div>

                <div className='ml-5 sm:flex  md:justify-evenly md:flex md:flex-row'>
                <div className='mt-3  md:pt-6 w-auto flex md:flex-row'>
                <div className='pt-2'><h2 className='font-semibold text-base md:font-bold md:text-xl'>Company : </h2></div> 
                <div className='pl-2 md:pl-3 text-base w-44 md:w-48'>
                    <MultipleSelectCompany/>
                </div>
                </div>
                </div>
            </div>
           
              <div className='w-auto  mt-3 ml-6 '>
                 <div className=' md:ml-20 md:mt-[-9vh]'><p className=' text-base md:text-xl'>Willing to Apply?</p></div>
                 <div className='md:ml-20 md:mt-1'>
                    <Options/>
                 </div>
              </div>

             <div className=''>
                   <div className='flex flex-row ml-6 mt-4 md:ml-24 md:mt-3'>
                   <div className='font-semibold md:text-xl pt-3 md:pt-2 pr-2 md:font-bold md:pr-4'><p className='pt-[-7]'>Technologies : </p></div>
                   <div className=''><Technologies/></div>
                   </div>

                   <div className='flex flex-row ml-6 mt-4 md:ml-24 md:mt-3'>
                   <div className='font-semibold md:text-xl pt-3 md:pt-2 pr-2 md:font-bold md:pr-4'><p className='pt-[-7]'>Roles : </p></div>
                   <div className=''><Choices/></div>
                   </div>
             </div>

             <div className='flex flex-row md:mt-9 mt-5 ml-6  md:ml-24 md:pb-5'>
                <div className='mr-5'><Button variant="contained">Submit</Button></div>
                <div><Button variant="outlined">Reset</Button></div>
             </div>

        </div>
    </>
  )
}
