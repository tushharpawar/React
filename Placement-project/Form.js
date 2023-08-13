import React from 'react'
import InnerFoem from './InnerFoem';

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import DivOp from './DivOp';
import STable from './Table';



export default function Form() {
        

  return (
    <div className='h-[85vh] w-[63vw] bg-white ml-[15vw] mt-8'>
        <div>
        <Router>
        <DivOp/>
        <Routes>
            <Route path='/' element={<InnerFoem/>}/>
            <Route path='/Applied' element={<STable/>}/>
        </Routes>
        </Router>
  
    </div>
    </div>
  )
}
