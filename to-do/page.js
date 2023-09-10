import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='text-4xl font-bold bg-black text-white text-center p-5'>My To-Do List</h1>
      <form>
        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' />
      </form>
    </>
  )

}

export default page