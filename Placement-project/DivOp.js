import React from 'react'
import Apply from './Apply'
import Applied from './Applied'
import { Link } from 'react-router-dom';

export default function DivOp () {

  return (
    <>
        <div className='flex flex-row justify-center w-auto'>
             <Link to={'/'}><Apply/></Link>
             <Link to={'/Applied'}><Applied/></Link>
        </div>
    </>
  )
}
