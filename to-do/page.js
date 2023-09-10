"use client"
import React, { useState } from 'react'

const page = () => {

  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [mainTask,setMainTask]=useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    setMainTask([...mainTask,{title,desc}])
    setTitle("");
    setDesc("");
  }

  const deleteHandler=(i)=>{
               let copyTask=[...mainTask]
               copyTask.splice(i,1)
               setMainTask(copyTask)
  }

  let renderTask=<h2>No task available</h2>

  if(mainTask.length>0){renderTask= mainTask.map((t,i)=>{
    return(
     <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex justify-between mb-5 w-2/3 '>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
      <button 
      onClick={()=>{
        deleteHandler(i)
        }}
      className='bg-red-500 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </div>
     </li>
    )
  })
}

  return (
    <>
      <h1 className='text-4xl font-bold bg-black text-white text-center p-5'>My To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' 
          placeholder='Enter Title here'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' 
          placeholder='Enter Description here'
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
        />

        <button className='bg-black text-white px-4 py-2 text-2xl rounded font-bold m-5'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>
        {renderTask}
        </ul>
      </div>
    </>
  )

}

export default page